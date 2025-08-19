import type { PoolConfig } from "npm:pg";
import 'jsr:@std/dotenv/load';

const databaseClientConfig: PoolConfig = {
  connectionString: Deno.env.get("PG_CONNECTION_STRING"),
  ssl: { rejectUnauthorized: false }
};

export default databaseClientConfig;