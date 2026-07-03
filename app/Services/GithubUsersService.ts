import GithubApiException from 'App/Exceptions/GithubApiException'

export default class GithubUsersService {
  public async getRandomUserLogin(): Promise<string> {
    try {
      const response = await fetch('https://api.github.com/users')

      if (!response.ok) {
        throw new GithubApiException()
      }

      const users = await response.json()

      if (!Array.isArray(users) || users.length === 0) {
        throw new GithubApiException('A API do GitHub não retornou usuários.')
      }

      const randomIndex = Math.floor(Math.random() * users.length)

      return users[randomIndex].login
    } catch (error) {
      if (error instanceof GithubApiException) {
        throw error
      }

      throw new GithubApiException()
    }
  }
}
