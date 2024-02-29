const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  const rewriteFn = function (path, req) {
    if (req.url.includes('/orgTemplate') || req.url.includes('/apiTemplate')) {
       return path;
    } else {
       return `/${req.get('referer').split('/')[3]}${path}`;
    }
  };

  app.use(
    ['/files', '/orgTemplate', '/apiTemplate'],
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: rewriteFn,
    })
  );

  app.use(
    ['/admin'],
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};