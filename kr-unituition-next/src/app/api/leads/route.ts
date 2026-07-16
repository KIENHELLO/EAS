import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { pool, useDb, initDb } from '../../../lib/db';

const leadsFilePath = path.join(process.cwd(), 'src', 'data', 'leads.json');

async function readLeads() {
  try {
    const data = await fs.readFile(leadsFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeLeads(leads: any[]) {
  await fs.writeFile(leadsFilePath, JSON.stringify(leads, null, 2), 'utf-8');
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const search = searchParams.get('search');

  // Initialize DB if available
  if (useDb) {
    await initDb();
  }

  // 1. Try to read from PostgreSQL Database if active
  if (useDb && pool) {
    try {
      let queryText = 'SELECT * FROM leads';
      const params: any[] = [];
      const conditions: string[] = [];

      if (status && status !== 'all') {
        conditions.push(`status = $${params.length + 1}`);
        params.push(status);
      }

      if (search) {
        const query = `%${search.toLowerCase()}%`;
        conditions.push(`(
          LOWER(name) LIKE $${params.length + 1} OR 
          phone LIKE $${params.length + 1} OR 
          LOWER(email) LIKE $${params.length + 1} OR 
          LOWER(school_name) LIKE $${params.length + 1} OR
          LOWER(city) LIKE $${params.length + 1}
        )`);
        params.push(query);
      }

      if (conditions.length > 0) {
        queryText += ' WHERE ' + conditions.join(' AND ');
      }

      queryText += ' ORDER BY created_at DESC';

      const result = await pool.query(queryText, params);
      
      const formattedRows = result.rows.map(row => ({
        ...row,
        notes: typeof row.notes === 'string' ? JSON.parse(row.notes) : row.notes,
        timeline: typeof row.timeline === 'string' ? JSON.parse(row.timeline) : row.timeline,
        visited_schools: typeof row.visited_schools === 'string' ? JSON.parse(row.visited_schools) : (row.visited_schools || [])
      }));

      return NextResponse.json(formattedRows);
    } catch (err: any) {
      console.error('Database query failed, falling back to JSON file:', err);
    }
  }

  // 2. Fallback to Local JSON File
  let leads = await readLeads();

  // Sort by created_at desc (newest first)
  leads.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  if (status && status !== 'all') {
    leads = leads.filter((l: any) => l.status === status);
  }

  if (search) {
    const query = search.toLowerCase();
    leads = leads.filter(
      (l: any) =>
        l.name.toLowerCase().includes(query) ||
        l.phone.includes(query) ||
        l.email.toLowerCase().includes(query) ||
        l.city.toLowerCase().includes(query) ||
        (l.school_name && l.school_name.toLowerCase().includes(query))
    );
  }

  return NextResponse.json(leads);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, city, school_id, school_name, visited_schools } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Missing name or phone' }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const leadId = `lead-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;

    const initialTimeline = [
      {
        id: `t-${Date.now()}`,
        type: 'create',
        text: `Đăng ký tư vấn học phí ${school_name || 'trường'} từ website`,
        created_at: timestamp,
        user: 'System',
      },
    ];

    const newLead = {
      id: leadId,
      name,
      phone,
      email: email || '',
      city: city || 'Chưa rõ',
      school_id: school_id || '',
      school_name: school_name || '',
      created_at: timestamp,
      status: 'new',
      notes: [],
      timeline: initialTimeline,
      visited_schools: Array.isArray(visited_schools) ? visited_schools : []
    };

    // Initialize DB if available
    if (useDb) {
      await initDb();
    }

    // 1. Try to save to PostgreSQL
    if (useDb && pool) {
      try {
        const queryText = `
          INSERT INTO leads (id, name, phone, email, city, school_id, school_name, created_at, status, notes, timeline, visited_schools)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
          RETURNING *
        `;
        const result = await pool.query(queryText, [
          newLead.id,
          newLead.name,
          newLead.phone,
          newLead.email,
          newLead.city,
          newLead.school_id,
          newLead.school_name,
          newLead.created_at,
          newLead.status,
          JSON.stringify(newLead.notes),
          JSON.stringify(newLead.timeline),
          JSON.stringify(newLead.visited_schools)
        ]);

        const insertedLead = result.rows[0];
        return NextResponse.json({
          ...insertedLead,
          notes: typeof insertedLead.notes === 'string' ? JSON.parse(insertedLead.notes) : insertedLead.notes,
          timeline: typeof insertedLead.timeline === 'string' ? JSON.parse(insertedLead.timeline) : insertedLead.timeline,
          visited_schools: typeof insertedLead.visited_schools === 'string' ? JSON.parse(insertedLead.visited_schools) : (insertedLead.visited_schools || [])
        });
      } catch (err: any) {
        console.error('Database insertion failed, falling back to JSON file:', err);
      }
    }

    // 2. Fallback to Local JSON File
    const leads = await readLeads();
    leads.push(newLead);
    await writeLeads(leads);

    return NextResponse.json(newLead);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, noteText, author = 'admin@koreaedu.vn' } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing lead ID' }, { status: 400 });
    }

    const timestamp = new Date().toISOString();

    // Initialize DB if available
    if (useDb) {
      await initDb();
    }

    // 1. Try to update in PostgreSQL
    if (useDb && pool) {
      try {
        const fetchResult = await pool.query('SELECT * FROM leads WHERE id = $1', [id]);
        if (fetchResult.rows.length === 0) {
          return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
        }

        const lead = fetchResult.rows[0];
        let currentNotes = typeof lead.notes === 'string' ? JSON.parse(lead.notes) : lead.notes;
        let currentTimeline = typeof lead.timeline === 'string' ? JSON.parse(lead.timeline) : lead.timeline;
        if (!Array.isArray(currentNotes)) currentNotes = [];
        if (!Array.isArray(currentTimeline)) currentTimeline = [];

        let updatedStatus = lead.status;

        // Status Change
        if (status && status !== lead.status) {
          const oldStatusText = getStatusLabel(lead.status);
          const newStatusText = getStatusLabel(status);

          updatedStatus = status;
          currentTimeline.push({
            id: `t-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
            type: 'status_change',
            text: `Thay đổi trạng thái từ ${oldStatusText} sang ${newStatusText}`,
            created_at: timestamp,
            user: author,
          });
        }

        // Add Note
        if (noteText && noteText.trim() !== '') {
          const noteId = `n-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
          currentNotes.push({
            id: noteId,
            text: noteText.trim(),
            created_at: timestamp,
            author: author,
          });

          currentTimeline.push({
            id: `t-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
            type: 'note',
            text: `Thêm ghi chú mới: "${noteText.trim().substring(0, 40)}${noteText.trim().length > 40 ? '...' : ''}"`,
            created_at: timestamp,
            user: author,
          });
        }

        const updateQuery = `
          UPDATE leads 
          SET status = $1, notes = $2, timeline = $3
          WHERE id = $4
          RETURNING *
        `;
        const updateResult = await pool.query(updateQuery, [
          updatedStatus,
          JSON.stringify(currentNotes),
          JSON.stringify(currentTimeline),
          id
        ]);

        const updatedLead = updateResult.rows[0];
        return NextResponse.json({
          ...updatedLead,
          notes: typeof updatedLead.notes === 'string' ? JSON.parse(updatedLead.notes) : updatedLead.notes,
          timeline: typeof updatedLead.timeline === 'string' ? JSON.parse(updatedLead.timeline) : updatedLead.timeline,
          visited_schools: typeof updatedLead.visited_schools === 'string' ? JSON.parse(updatedLead.visited_schools) : (updatedLead.visited_schools || [])
        });
      } catch (err: any) {
        console.error('Database update failed, falling back to JSON file:', err);
      }
    }

    // 2. Fallback to Local JSON File
    const leads = await readLeads();
    const leadIndex = leads.findIndex((l: any) => l.id === id);

    if (leadIndex === -1) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    const lead = leads[leadIndex];

    // Status Change
    if (status && status !== lead.status) {
      const oldStatusText = getStatusLabel(lead.status);
      const newStatusText = getStatusLabel(status);

      lead.status = status;
      lead.timeline.push({
        id: `t-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        type: 'status_change',
        text: `Thay đổi trạng thái từ ${oldStatusText} sang ${newStatusText}`,
        created_at: timestamp,
        user: author,
      });
    }

    // Add Note
    if (noteText && noteText.trim() !== '') {
      const noteId = `n-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
      lead.notes.push({
        id: noteId,
        text: noteText.trim(),
        created_at: timestamp,
        author: author,
      });

      lead.timeline.push({
        id: `t-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        type: 'note',
        text: `Thêm ghi chú mới: "${noteText.trim().substring(0, 40)}${noteText.trim().length > 40 ? '...' : ''}"`,
        created_at: timestamp,
        user: author,
      });
    }

    leads[leadIndex] = lead;
    await writeLeads(leads);

    return NextResponse.json(lead);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case 'new':
      return 'Mới';
    case 'contacted':
      return 'Đã liên hệ';
    case 'processing':
      return 'Đang xử lý';
    case 'closed':
      return 'Đóng';
    default:
      return status;
  }
}
