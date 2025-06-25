import { neon } from '@neondatabase/serverless';

const sql = neon('postgresql://neondb_owner:npg_ASLcolZjzh70@ep-white-unit-a872j29f-pooler.eastus2.azure.neon.tech/neondb?sslmode=require');

async function addSourceColumn() {
  try {
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS source TEXT NOT NULL DEFAULT 'contact'`;
    console.log('Source column added successfully');
  } catch (error) {
    console.error('Error adding source column:', error);
  }
}

addSourceColumn(); 