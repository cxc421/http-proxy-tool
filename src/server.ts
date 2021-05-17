import express from "express";
import { ProxyTarget } from "./interface";
const { createProxyMiddleware } = require("http-proxy-middleware");

const startProxyServer = (target: ProxyTarget) => {
  // proxy middleware options
  const options = {
    target: target.url, // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    secure: false, // allow self-signed
  };

  // create the proxy (without context)
  const exampleProxy = createProxyMiddleware(options);

  // mount `exampleProxy` in web server
  const app = express();
  app.use("*", exampleProxy);
  app.listen(80);
};

export { startProxyServer };
