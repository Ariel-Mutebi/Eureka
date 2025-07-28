import ItemInDatabase from "../../interfaces/ItemInDatabase.ts";
import pool from "../pool.ts";

async function insertItem(item: ItemInDatabase) {
  const { name, description, emailOfPersonWhoPosted, password, isLost, location } = item;
  const sql = "INSERT INTO items (name, description, email_of_person_who_posted, password, is_lost, location) VAlUES ($1, $2, $3, $4, $5, point($6, $7));"
  const values = [name, description, emailOfPersonWhoPosted, password, isLost, location.x, location.y];
  await pool.query(sql, values);
};

export default insertItem;