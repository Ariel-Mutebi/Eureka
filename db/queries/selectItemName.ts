import pool from "../pool.ts";

async function selectItemName(itemPrimaryKey: string) {
  const response = await pool.query("SELECT name FROM items where pk=$1", [itemPrimaryKey]);
  return response.rows[0].name as string;
}

export default selectItemName;