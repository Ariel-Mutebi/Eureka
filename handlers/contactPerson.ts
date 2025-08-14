import type { Request, Response } from "npm:express";
import selectEmailOfPerson from "../db/queries/selectEmailOfPerson.ts";

const contactPerson = (req: Request, res: Response) => {
  const email = selectEmailOfPerson(req.params.itemPrimaryKey);
  const { subject, message } = req.body;
  res.redirect("/");
};

export default contactPerson;