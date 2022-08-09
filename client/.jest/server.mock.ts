global.fetch = require('node-fetch')

import { server } from '../src/utils/mockServer/server'

beforeAll(() => {
  // fica escutando todas as chamadas nos testes
  server.listen()
})

afterEach(() => {
  // reseta todos os handlers para caso ele seja chamado novamente. Isso faz um teste não influenciar no outro
  server.resetHandlers()
})

afterAll(() => {
  // fecha o servidor e limpa os testes
  server.close()
})
