import pool from "../pool.ts";
import { recaseKeys } from "jsr:@ariel/database-chores";

async function selectEmailOfPerson(itemPrimaryKey: string){
  const response = await pool.query("SELECT email_of_person_who_posted FROM items where pk=$1", [itemPrimaryKey])
  return recaseKeys(response.rows[0]).emailOfPersonWhoPosted as string;
}

export default selectEmailOfPerson;