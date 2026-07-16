import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const universitiesFilePath = path.join(process.cwd(), 'src', 'data', 'universities.js');

async function readUniversities() {
  try {
    const data = await fs.readFile(universitiesFilePath, 'utf-8');
    const startIdx = data.indexOf('[');
    const endIdx = data.lastIndexOf(']');
    if (startIdx === -1 || endIdx === -1) {
      throw new Error('Could not parse universities array');
    }
    const jsonText = data.substring(startIdx, endIdx + 1);
    return JSON.parse(jsonText);
  } catch (error) {
    console.error('Error reading universities:', error);
    return [];
  }
}

async function writeUniversities(universities: any[]) {
  const fileContent = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;
  await fs.writeFile(universitiesFilePath, fileContent, 'utf-8');
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  const type = searchParams.get('type');
  const region = searchParams.get('region');

  let list = await readUniversities();

  if (search) {
    const query = search.toLowerCase();
    list = list.filter(
      (u: any) =>
        u.name_vi.toLowerCase().includes(query) ||
        u.name_en.toLowerCase().includes(query) ||
        u.name_ko.toLowerCase().includes(query) ||
        u.id.toLowerCase().includes(query)
    );
  }

  if (type && type !== 'all') {
    list = list.filter((u: any) => u.type === type);
  }

  if (region && region !== 'all') {
    list = list.filter((u: any) => u.region === region);
  }

  // Sort by ranking or name
  list.sort((a: any, b: any) => (a.ranking || 999) - (b.ranking || 999));

  return NextResponse.json(list);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name_vi,
      name_en,
      name_ko,
      type,
      region,
      campus_address,
      website,
      tuition,
      dorm_fee,
      living_cost_est,
      scholarships,
      description,
      accept_gdtx = null,
      visa_metropolitan = false,
      master_no_topik = false,
      custom_notes = '',
      top_1_percent = false,
      ranking = 99,
      // media / seo fields
      logo = '',
      cover_photo = '',
      campus_photos = [],
      seo = {
        vi: { title: '', desc: '' },
        ko: { title: '', desc: '' },
        en: { title: '', desc: '' },
      },
    } = body;

    if (!name_vi) {
      return NextResponse.json({ error: 'Missing name_vi' }, { status: 400 });
    }

    // Generate unique ID
    const baseId = name_en ? name_en.toLowerCase().replace(/[^a-z0-9]/g, '') : name_vi.toLowerCase().replace(/[^a-z0-9]/g, '');
    const id = baseId.substring(0, 15) + Math.random().toString(36).substr(2, 4);

    const universities = await readUniversities();

    const newUniversity = {
      id,
      name_en: name_en || name_vi,
      name_ko: name_ko || '',
      name_vi,
      type: type || 'private',
      region: region || 'Seoul',
      ranking: Number(ranking) || 99,
      campus_address: campus_address || '',
      website: website || '',
      tuition: tuition || {
        humanities_social: null,
        natural_sciences: null,
        engineering: null,
        arts_sports: null,
        medicine_pharmacy: null,
      },
      dorm_fee: dorm_fee !== undefined ? Number(dorm_fee) : null,
      living_cost_est: living_cost_est !== undefined ? Number(living_cost_est) : null,
      scholarships: Array.isArray(scholarships) ? scholarships : [],
      description: description || '',
      accept_gdtx,
      visa_metropolitan,
      master_no_topik,
      custom_notes,
      top_1_percent,
      logo,
      cover_photo,
      campus_photos,
      seo,
    };

    universities.push(newUniversity);
    await writeUniversities(universities);

    return NextResponse.json(newUniversity);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing university ID' }, { status: 400 });
    }

    const universities = await readUniversities();
    const index = universities.findIndex((u: any) => u.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'University not found' }, { status: 404 });
    }

    // Merge changes
    universities[index] = {
      ...universities[index],
      ...updates,
    };

    await writeUniversities(universities);

    return NextResponse.json(universities[index]);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing university ID' }, { status: 400 });
    }

    const universities = await readUniversities();
    const filtered = universities.filter((u: any) => u.id !== id);

    if (filtered.length === universities.length) {
      return NextResponse.json({ error: 'University not found' }, { status: 404 });
    }

    await writeUniversities(filtered);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
