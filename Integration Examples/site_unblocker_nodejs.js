import fetch from 'node-fetch';
import createHttpsProxyAgent from 'https-proxy-agent'

const username = 'USERNAME';
const password = 'PASSWORD';

const agent = createHttpsProxyAgent(
  `http://${username}:${password}@unblock.decodo.com:60000`
);

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const response = await fetch('https://ip.decodo.com/', {
  method: 'get',
  agent: agent
});

console.log(await response.text());
