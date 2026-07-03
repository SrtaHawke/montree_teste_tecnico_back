import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return {
    message: 'API Lista de Compras Aleatórias com Catálogo',
  }
})

Route.get('/itens', 'ItemsController.index')
Route.post('/itens', 'ItemsController.store')

Route.get('/compras', 'PurchasesController.index')
Route.post('/compras', 'PurchasesController.store')
