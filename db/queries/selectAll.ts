import recaseKeys from "../../littleFunctions/recaseKeys.ts";
import pool from "../pool.ts";

async function selectAll() {
  const response = await pool.query("SELECT * from items;");
  return response.rows.map(itemObject => recaseKeys(itemObject));
};

export default selectAll;