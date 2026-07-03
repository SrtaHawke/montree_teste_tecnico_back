export default class ItemNotFoundException extends Error {
  public status = 404

  constructor(message = 'Item não encontrado.') {
    super(message)
    this.name = 'ItemNotFoundException'
  }
}
