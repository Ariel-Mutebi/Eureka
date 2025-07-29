import pool from "../pool.ts";

async function deleteItem(itemPrimaryKey: string) {
  await pool.query("DELETE FROM items WHERE pk=$1", [itemPrimaryKey]);
}

export default deleteItem;