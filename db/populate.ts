import { executeSQLFromFile } from "jsr:@ariel/database-chores";
import databaseClientConfig from "./config.ts";
import { join } from "jsr:@std/path";

await executeSQLFromFile(join(import.meta.dirname!, 'populate.sql'), databaseClientConfig);