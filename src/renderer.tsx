import { jsxRenderer } from 'hono/jsx-renderer';
import { ViteClient } from 'vite-ssr-components/hono';

export const renderer = jsxRenderer(({ children }, c) => {
  const titleVal = c.get('title') || 'aoaochan';
  const title = titleVal === 'aoaochan' ? titleVal : `aoaochan | ${titleVal}`;

  return (
    <html lang="ko">
      <head>
        <ViteClient />
        <link rel="stylesheet" as="style" crossOrigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <link href="/style.css" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script src="/js/htmx@2.0.8.min.js"></script>
        <title>{title}</title>
      </head>
      <body><div id="container">{children}</div></body>
    </html>
  );
});
