const bodyParserConfig = {
  whitelistedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],

  json: {
    encoding: 'utf-8',
    limit: '1mb',
    strict: true,
  },

  form: {
    encoding: 'utf-8',
    limit: '1mb',
    queryString: {},
  },

  multipart: {
    autoProcess: true,
    processManually: [],
    encoding: 'utf-8',
    fieldsLimit: '2mb',
    limit: '20mb',
    types: [],
  },

  raw: {
    encoding: 'utf-8',
    limit: '1mb',
  },
}

export default bodyParserConfig
