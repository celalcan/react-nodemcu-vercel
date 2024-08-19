import { createServer, Model } from 'json-server';

const server = createServer();
const router = server.router({
  status: 0
});
server.use(router);
server.listen(3000);