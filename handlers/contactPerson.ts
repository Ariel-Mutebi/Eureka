import type { Request, Response } from "npm:express";
import { createTransport } from "npm:nodemailer";
import type SMTPTransport from "npm:nodemailer/lib/smtp-transport";
import selectEmailOfPerson from "../db/queries/selectEmailOfPerson.ts";
import 'jsr:@std/dotenv/load';

const contactPerson = async(req: Request, res: Response) => {
  const fromEmail = Deno.env.get("EMAIL");
  const toEmail = await selectEmailOfPerson(req.params.itemPrimaryKey);
  const { subject, message } = req.body;

  const transportOptions: SMTPTransport.Options = {
    host: Deno.env.get("SMTP_HOST"),
    port: Number(Deno.env.get("SMTP_PORT")),
    tls: { rejectUnauthorized: false },
    secure: false,
    auth: {
      user: fromEmail,
      pass: Deno.env.get("APP_PASSWORD")
    }
  };

  const transporter = createTransport(transportOptions);

  await transporter.sendMail({
    from: `"Eureka the lost and found website" <${fromEmail}>`,
    to: toEmail,
    subject: subject,
    text: message
  });

  res.redirect("/");
};

export default contactPerson;