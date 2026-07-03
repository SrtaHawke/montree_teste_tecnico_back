import Database from '@ioc:Adonis/Lucid/Database'
import Item from 'App/Models/Item'
import Purchase from 'App/Models/Purchase'
import GithubUsersService from './GithubUsersService'
import ItemNotFoundException from 'App/Exceptions/ItemNotFoundException'
import OutOfStockException from 'App/Exceptions/OutOfStockException'

export default class PurchaseService {
  private githubUsersService = new GithubUsersService()

  public async create(itemId: number): Promise<Purchase> {
    const item = await Item.find(itemId)

    if (!item) {
      throw new ItemNotFoundException()
    }

    if (item.qtdAtual <= 0) {
      throw new OutOfStockException()
    }

    const compradorGithubLogin = await this.githubUsersService.getRandomUserLogin()

    return Database.transaction(async (trx) => {
      item.useTransaction(trx)

      item.qtdAtual = item.qtdAtual - 1
      await item.save()

      const purchase = new Purchase()
      purchase.useTransaction(trx)
      purchase.itemId = item.id
      purchase.compradorGithubLogin = compradorGithubLogin

      await purchase.save()
      await purchase.load('item')

      return purchase
    })
  }
}
