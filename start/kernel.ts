import Server from '@ioc:Adonis/Core/Server'

Server.middleware.register([
  () => import('App/Middleware/SimpleBodyParser'),
])

Server.middleware.registerNamed({})
