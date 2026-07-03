export default class GithubApiException extends Error {
  public status = 502

  constructor(message = 'Não foi possível consultar a API do GitHub.') {
    super(message)
    this.name = 'GithubApiException'
  }
}
