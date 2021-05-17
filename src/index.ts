import { getProxyTarget } from "./screen";
import { startProxyServer } from "./server";

async function start() {
  const proxyTarget = await getProxyTarget();
  startProxyServer(proxyTarget);
}

start().catch((err) => console.error(err));
