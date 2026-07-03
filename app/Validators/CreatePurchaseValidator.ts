import { schema } from '@ioc:Adonis/Core/Validator'

export default class CreatePurchaseValidator {
  public schema = schema.create({
    item_id: schema.number(),
  })

  public messages = {
    required: 'O campo {{ field }} é obrigatório.',
    number: 'O campo {{ field }} deve ser numérico.',
  }
}
