export default class GithubUsersService {
  public async getRandomUserLogin(): Promise<string> {
    const response = await fetch('https://api.github.com/users')

    if (!response.ok) {
      throw new Error('Não foi possível consultar a API do GitHub.')
    }

    const users = await response.json()

    if (!Array.isArray(users) || users.length === 0) {
      throw new Error('A API do GitHub não retornou usuários.')
    }

    const randomIndex = Math.floor(Math.random() * users.length)

    return users[randomIndex].login
  }
}
