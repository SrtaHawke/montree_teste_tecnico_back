import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Purchase from 'App/Models/Purchase'
import PurchaseService from 'App/Services/PurchaseService'
// import CreatePurchaseValidator from 'App/Validators/CreatePurchaseValidator'

export default class PurchasesController {
  private purchaseService = new PurchaseService()

  public async index({ response }: HttpContextContract) {
    const purchases = await Purchase.query().preload('item')

    return response.ok(purchases)
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const body = request.all()
      const itemId = body.item_id

      if (!itemId) {
        return response.badRequest({
          message: 'item_id é obrigatório.',
          body,
        })
      }

      const purchase = await this.purchaseService.create(Number(itemId))

      return response.created(purchase)
    } catch (error) {
      return response.badRequest({
        message: error.message || 'Erro ao criar compra.',
      })
    }
  }
}
