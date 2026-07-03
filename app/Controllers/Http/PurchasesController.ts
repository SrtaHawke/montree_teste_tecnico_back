import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Purchase from 'App/Models/Purchase'
import PurchaseService from 'App/Services/PurchaseService'

export default class PurchasesController {
  private purchaseService = new PurchaseService()

  public async index({ response }: HttpContextContract) {
    const purchases = await Purchase.query().preload('item')

    return response.ok(purchases)
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const itemId = Number(request.input('item_id'))

      if (!itemId || Number.isNaN(itemId)) {
        return response.badRequest({
          message: 'item_id é obrigatório e deve ser numérico.',
        })
      }

      const purchase = await this.purchaseService.create(itemId)

      return response.created(purchase)
    } catch (error) {
      return response.status(error.status || 400).send({
        message: error.message || 'Erro ao criar compra.',
      })
    }
  }
}
