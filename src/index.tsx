import { Hono } from 'hono';
import { renderer } from './renderer';

const app = new Hono();

app.use(renderer);

app.get('/', (c) => {
  return c.render(<p>안녕 세계!</p>);
});

app.get('/about', (c) => {
  c.set('title' as never, 'about')
  return c.render(<h1>About</h1>);
});

export default app;
