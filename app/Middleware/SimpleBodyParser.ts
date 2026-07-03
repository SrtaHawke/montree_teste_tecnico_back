import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SimpleBodyParser {
  public async handle({ request }: HttpContextContract, next: () => Promise<void>) {
    const method = request.method()
    const contentType = request.header('content-type') || ''

    if (
      ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method) &&
      contentType.includes('application/json')
    ) {
      const req = request.request
      const chunks: Buffer[] = []

      await new Promise<void>((resolve, reject) => {
        req.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
        req.on('end', resolve)
        req.on('error', reject)
      })

      const rawBody = Buffer.concat(chunks).toString('utf-8')

      if (rawBody.trim()) {
        request.updateBody(JSON.parse(rawBody))
      }
    }

    await next()
  }
}
