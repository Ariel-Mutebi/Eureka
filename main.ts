import 'jsr:@std/dotenv/load';
import express from 'npm:express';
import indexRouter from "./routes/indexRouter.ts";
import listening from "./helperFunctions/listening.ts";

const app = express();
const PORT = Number(Deno.env.get('PORT'));

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', indexRouter);

app.listen(PORT, (error) => listening(error, PORT));