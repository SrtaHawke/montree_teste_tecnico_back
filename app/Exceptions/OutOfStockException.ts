export default class OutOfStockException extends Error {
  public status = 400

  constructor(message = 'Item sem estoque disponível.') {
    super(message)
    this.name = 'OutOfStockException'
  }
}
