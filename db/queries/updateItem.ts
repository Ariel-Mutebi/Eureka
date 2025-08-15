import Item from "../../interfaces/Item.ts";
import pool from "../pool.ts";

async function updateItem(item: Item) {
  const { name, description, emailOfPersonWhoPosted, password, isLost, location, pk } = item;
  const sql = "UPDATE items SET name=$1, description=$2, email_of_person_who_posted=$3, password=$4, is_lost=$5, location=point($6,$7) WHERE pk=$8;";
  const values = [name, description, emailOfPersonWhoPosted, password, isLost, location.x, location.y, pk];
  await pool.query(sql, values);
};

export default updateItem;