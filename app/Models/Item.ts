import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Purchase from './Purchase'

export default class Item extends BaseModel {
  public static table = 'items'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public preco: number

  @column()
  public qtdAtual: number

  @hasMany(() => Purchase)
  public purchases: HasMany<typeof Purchase>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
