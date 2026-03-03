import { jsxRenderer } from 'hono/jsx-renderer';
import { Link, ViteClient } from 'vite-ssr-components/hono';

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <ViteClient />
        <Link href="/src/style.css" rel="stylesheet" />
        <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script src="/js/htmx@2.0.8.min.js"></script>
        <title>aoaochan</title>
      </head>
      <body>{children}</body>
    </html>
  );
});
