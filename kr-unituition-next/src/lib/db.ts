import pg from 'pg';

const { Pool } = pg;

let pool: pg.Pool | null = null;
let useDb = false;

const dbUrl = process.env.DATABASE_URL;

if (dbUrl && !dbUrl.includes('your_database')) {
  try {
    pool = new Pool({
      connectionString: dbUrl,
      ssl: dbUrl.includes('sslmode=require') || dbUrl.includes('neon.tech')
        ? { rejectUnauthorized: false }
        : false
    });
    useDb = true;
  } catch (err) {
    console.error('Failed to initialize PostgreSQL pool:', err);
  }
} else {
  console.warn('DATABASE_URL is not set. Falling back to JSON file database.');
}

let isInitialized = false;

export async function initDb() {
  if (isInitialized) return true;
  if (!useDb || !pool) return false;

  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255),
        city VARCHAR(255),
        school_id VARCHAR(100),
        school_name VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(50) DEFAULT 'new',
        notes JSONB DEFAULT '[]'::jsonb,
        timeline JSONB DEFAULT '[]'::jsonb,
        visited_schools JSONB DEFAULT '[]'::jsonb
      );

      ALTER TABLE leads ADD COLUMN IF NOT EXISTS visited_schools JSONB DEFAULT '[]'::jsonb;

      CREATE TABLE IF NOT EXISTS school_clicks (
        id SERIAL PRIMARY KEY,
        school_id VARCHAR(100) NOT NULL,
        school_name VARCHAR(255) NOT NULL,
        clicked_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        ip_address VARCHAR(50),
        city VARCHAR(100)
      );
    `);
    isInitialized = true;
    return true;
  } catch (err) {
    console.error('Error initializing database tables, falling back to file:', err);
    useDb = false;
    return false;
  }
}

export { pool, useDb };
