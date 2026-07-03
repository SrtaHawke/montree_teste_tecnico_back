import { schema } from '@ioc:Adonis/Core/Validator'

export default class CreateItemValidator {
  public schema = schema.create({
    nome: schema.string(),
    preco: schema.number(),
    qtd_atual: schema.number(),
  })

  public messages = {
    required: 'O campo {{ field }} é obrigatório.',
    number: 'O campo {{ field }} deve ser numérico.',
    string: 'O campo {{ field }} deve ser texto.',
  }
}
