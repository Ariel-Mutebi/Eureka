// @ts-types='npm:@types/pg';
import { Client } from 'npm:pg'; 
import databaseClientConfig from "./config.ts";

async function populateDB(sql: string) {
  console.log('Populating database...');
  const client = new Client(databaseClientConfig);
  await client.connect();
  await client.query(sql);
  await client.end();
  console.log('Done.');
};

try {
  const populateScript = await Deno.readTextFile(import.meta.dirname + '/populate.sql');
  populateDB(populateScript);
} catch (error) {
  console.error(error);
};