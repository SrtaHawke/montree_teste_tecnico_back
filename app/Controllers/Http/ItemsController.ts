import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'
import CreateItemValidator from 'App/Validators/CreateItemValidator'

export default class ItemsController {
  public async index({ response }: HttpContextContract) {
    const items = await Item.all()

    return response.ok(items)
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(CreateItemValidator)

      const item = await Item.create({
        nome: payload.nome,
        preco: payload.preco,
        qtdAtual: payload.qtd_atual,
      })

      return response.created(item)
    } catch (error) {
      return response.unprocessableEntity({
        message: error.message,
        errors: error.messages || null,
        body: request.all(),
      })
    }
  }
}
