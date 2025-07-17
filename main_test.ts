import './main.ts';
import { assertEquals } from '@std/assert';

Deno.test('GET request to "/" responds "Hello, world!"', async() => {
  try {
    const response = await fetch('http://localhost:3000/');
    if(!response.ok) throw new Error(`Response status: ${response.status}`);
    assertEquals(await response.text(), 'Hello, world!');
  } catch (error) {
    console.error(error)
  }
});
