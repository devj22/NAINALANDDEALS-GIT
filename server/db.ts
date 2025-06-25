import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { sql } from 'drizzle-orm';
import * as schema from '../shared/schema.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Now DATABASE_URL is guaranteed to be a string
const dbUrl: string = DATABASE_URL;

let dbInstance: ReturnType<typeof drizzle> | null = null;

export function getDb() {
  if (!dbInstance) {
    try {
      const sql = neon(dbUrl);
      dbInstance = drizzle(sql, { schema });
    } catch (error) {
      console.error('Failed to initialize database:', error);
      throw error;
    }
  }
  return dbInstance;
}

export const db = getDb();

// Export a function to check database connection
export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    // Try to query the database
    await db.execute(sql`SELECT 1`);
    console.log('Database connection successful');
    return true;
  } catch (error) {
    console.error('Database connection check failed:', error);
    return false;
  }
}

// Helper function to safely parse dates
export function safeParseDate(date: string | Date | null | undefined): Date {
  if (!date) return new Date();
  try {
    return new Date(date);
  } catch (error) {
    console.error('Error parsing date:', error);
    return new Date();
  }
}

// Helper function to safely parse boolean
export function safeParseBoolean(value: any): boolean {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value !== 0;
  if (typeof value === 'string') return value.toLowerCase() === 'true';
  return false;
} 