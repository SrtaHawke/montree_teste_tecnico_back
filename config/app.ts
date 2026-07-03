import proxyAddr from 'proxy-addr'
import Env from '@ioc:Adonis/Core/Env'

const app = {
  appKey: Env.get('APP_KEY'),

  http: {
    trustProxy: proxyAddr.compile('loopback'),
    cookie: {},
  },

  logger: {
    enabled: true,
    name: Env.get('APP_NAME', 'teste_tecnico_back'),
    level: Env.get('LOG_LEVEL', 'info'),
  },
}

export default app
