import 'jsr:@std/dotenv/load';

const databaseClientConfig = {
  user: Deno.env.get('PGUSER'),
  password: Deno.env.get('PGPASSWORD'),
  host: Deno.env.get('PGHOST'),
  port: Number(Deno.env.get('PGPORT')),
  database: Deno.env.get('PGDATABASE')
};

export default databaseClientConfig;