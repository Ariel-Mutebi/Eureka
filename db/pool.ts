// @ts-types='npm:@types/pg';
import { Pool } from "npm:pg";
import 'jsr:@std/dotenv/load';

// Because I'm using the Deno runtime, not Node,
// environment variables cannot be accessed via process.env,
// so node-postgres can't use process.env to get the configuration,
// so I have to do it myself. (And I'm whining because, like all coders, I'm lazy.)
const pool = new Pool({
  user: Deno.env.get('PGUSER'),
  password: Deno.env.get('PGPASSWORD'),
  host: Deno.env.get('PGHOST'),
  port: Number(Deno.env.get('PGPORT')),
  database: Deno.env.get('PGDATABASE')
});

export default pool;