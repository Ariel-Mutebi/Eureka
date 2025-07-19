// @ts-types='npm:@types/pg';
import { Pool } from "npm:pg";
import databaseClientConfig from './config.ts';

const pool = new Pool(databaseClientConfig);

export default pool;