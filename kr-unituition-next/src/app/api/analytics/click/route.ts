import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { pool, useDb, initDb } from '../../../../lib/db';

const clicksFilePath = path.join(process.cwd(), 'src', 'data', 'clicks.json');

async function readClicks() {
  try {
    const data = await fs.readFile(clicksFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeClicks(clicks: any[]) {
  // Ensure directory exists
  try {
    await fs.mkdir(path.dirname(clicksFilePath), { recursive: true });
  } catch (e) {}
  await fs.writeFile(clicksFilePath, JSON.stringify(clicks, null, 2), 'utf-8');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { school_id, school_name } = body;

    if (!school_id || !school_name) {
      return NextResponse.json({ error: 'Missing school_id or school_name' }, { status: 400 });
    }

    // Determine IP address
    const xForwardedFor = request.headers.get('x-forwarded-for');
    const ipAddress = xForwardedFor ? xForwardedFor.split(',')[0].trim() : '127.0.0.1';
    const city = 'Chưa rõ'; // Optional: Can expand with GeoIP in production

    const timestamp = new Date().toISOString();

    const newClick = {
      school_id,
      school_name,
      clicked_at: timestamp,
      ip_address: ipAddress,
      city
    };

    if (useDb) {
      await initDb();
    }

    // 1. Try to save to PostgreSQL
    if (useDb && pool) {
      try {
        const queryText = `
          INSERT INTO school_clicks (school_id, school_name, clicked_at, ip_address, city)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING *
        `;
        const result = await pool.query(queryText, [
          newClick.school_id,
          newClick.school_name,
          newClick.clicked_at,
          newClick.ip_address,
          newClick.city
        ]);
        return NextResponse.json({ success: true, data: result.rows[0] });
      } catch (err: any) {
        console.error('Database analytics insertion failed, falling back to JSON file:', err);
      }
    }

    // 2. Fallback to Local JSON File
    const clicks = await readClicks();
    clicks.push(newClick);
    await writeClicks(clicks);

    return NextResponse.json({ success: true, data: newClick });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    if (useDb) {
      await initDb();
    }

    // 1. Try to fetch stats from PostgreSQL
    if (useDb && pool) {
      try {
        const queryText = `
          SELECT 
            school_id, 
            school_name, 
            COUNT(*)::integer as views_count, 
            MAX(clicked_at) as last_clicked_at
          FROM school_clicks
          GROUP BY school_id, school_name
          ORDER BY views_count DESC
          LIMIT 10
        `;
        const result = await pool.query(queryText);
        return NextResponse.json(result.rows);
      } catch (err: any) {
        console.error('Database query for click stats failed, falling back to JSON file:', err);
      }
    }

    // 2. Fallback to Local JSON File
    const clicks = await readClicks();
    const statsMap: Record<string, { school_id: string; school_name: string; views_count: number; last_clicked_at: string }> = {};

    clicks.forEach((click: any) => {
      const { school_id, school_name, clicked_at } = click;
      if (!statsMap[school_id]) {
        statsMap[school_id] = {
          school_id,
          school_name,
          views_count: 0,
          last_clicked_at: clicked_at
        };
      }
      statsMap[school_id].views_count += 1;
      if (new Date(clicked_at).getTime() > new Date(statsMap[school_id].last_clicked_at).getTime()) {
        statsMap[school_id].last_clicked_at = clicked_at;
      }
    });

    const statsArray = Object.values(statsMap);
    // Sort descending by views_count
    statsArray.sort((a, b) => b.views_count - a.views_count);

    return NextResponse.json(statsArray.slice(0, 10));
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
