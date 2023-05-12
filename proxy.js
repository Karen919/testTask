const http = require('http');
const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
  target: 'https://cloud.codesupply.co/endpoint/react/data.json',
  changeOrigin: true,
  pathRewrite: {
    '^/endpoint': '/endpoint/react/data.json'
  }
});

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/endpoint')) {
    return proxy(req, res);
  }

});

// server.listen(3000, () => {
//   console.log('Proxy server listening on port 3000');
// });

server.listen(process.env.PORT || 3000, () => {
  console.log('Proxy server listening on port 3000');
});
