// @ts-types='npm:@types/express';
import 'jsr:@std/dotenv/load';
import express from 'npm:express';
import { join } from "jsr:@std/path";
import indexRouter from "./routes/indexRouter.ts";
import listening from "./littleFunctions/listening.ts";

const app = express();
const PORT = Number(Deno.env.get('PORT'));

app.set("views", join(import.meta.dirname!, "views"));
app.set("view engine", "ejs");

app.use('/', indexRouter);

app.listen(PORT, (error) => listening(error, PORT));