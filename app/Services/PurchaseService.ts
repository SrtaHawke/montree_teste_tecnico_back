import Database from '@ioc:Adonis/Lucid/Database'
import Item from 'App/Models/Item'
import Purchase from 'App/Models/Purchase'
import GithubUsersService from './GithubUsersService'

export default class PurchaseService {
  private githubUsersService = new GithubUsersService()

  public async create(itemId: number): Promise<Purchase> {
    const item = await Item.find(itemId)

    if (!item) {
      throw new Error('Item não encontrado.')
    }

    if (item.qtdAtual <= 0) {
      throw new Error('Item sem estoque disponível.')
    }

    const compradorGithubLogin = await this.githubUsersService.getRandomUserLogin()

    const purchase = await Database.transaction(async (trx) => {
      item.useTransaction(trx)

      item.qtdAtual = item.qtdAtual - 1
      await item.save()

      const createdPurchase = new Purchase()
      createdPurchase.useTransaction(trx)
      createdPurchase.itemId = item.id
      createdPurchase.compradorGithubLogin = compradorGithubLogin

      await createdPurchase.save()
      await createdPurchase.load('item')

      return createdPurchase
    })

    return purchase
  }
}
