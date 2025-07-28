import pool from "../pool.ts";

async function selectItemPassword(itemPrimaryKey: string) {
  const response = await pool.query("SELECT password FROM items WHERE pk=$1;", [itemPrimaryKey]);
  return response.rows[0].password as string;
};

export default selectItemPassword;