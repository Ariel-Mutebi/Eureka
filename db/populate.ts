// @ts-types='npm:@types/pg';
import { Client } from 'npm:pg'; 
import databaseClientConfig from "./config.ts";
import { join } from "jsr:@std/path";

async function populateDB(sql: string) {
  console.log('Populating database...');
  try {
    const client = new Client(databaseClientConfig);
    await client.connect();
    await client.query(sql);
    await client.end();
    console.log('Done.');
  } catch (error) {
    console.error(error);
  };
};

try {
  const populateScript = await Deno.readTextFile(join(import.meta.dirname!, 'populate.sql'));
  populateDB(populateScript);
} catch (error) {
  console.error(error);
};