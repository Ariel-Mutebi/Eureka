// @ts-types="npm:@types/express";
import express from 'npm:express';
import 'jsr:@std/dotenv/load';

const app = express();
const PORT = Deno.env.get('PORT');

app.get('/', (_, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`)
})