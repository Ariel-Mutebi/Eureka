import type { Request, Response } from "npm:express";
import { Resend } from "npm:resend";
import selectEmailOfPerson from "../db/queries/selectEmailOfPerson.ts";
import 'jsr:@std/dotenv/load';

const contactPerson = async(req: Request, res: Response) => {
  const to = await selectEmailOfPerson(req.params.itemPrimaryKey);
  const { subject, message } = req.body;

  const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

  await resend.emails.send({
    from: "contact@eureka.com", // I need to buy this domain.
    to,
    subject,
    text: message
  });

  res.redirect("/");
};

export default contactPerson;