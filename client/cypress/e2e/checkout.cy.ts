import { createUser } from '../support/generate'

describe('Checkout', () => {
  let user: User

  describe('Free Games', () => {
    before(() => {
      user = createUser()
    })

    it('should buy free games', () => {
      cy.visit('/sign-up')

      // criar um usuario
      cy.signUp(user)

      // verificar se foi para home
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      // ir para explore games
      cy.findByRole('link', { name: /explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      // filtrar por jogos free
      cy.findByText(/free/i).click()
      cy.url().should('contain', 'price_lte=0')

      // adicionar o jogo ao carrinho
      cy.addToCartByIndex(0)

      // adicionar outro jogo ao carrinho
      cy.addToCartByIndex(1)

      // verificar se o carrinho tem 2 jogos e abrir o dropdown
      cy.findAllByLabelText(/Cart Items/i)
        .first()
        .should('have.text', 2)
        .click()

      // clicar para fazer a compra
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      // encontrar o texto só de jogos free
      cy.findByText(/Only free games, click buy and enjoy/i).should('exist')

      // clicar para finalizar a compra
      cy.findByRole('button', { name: /buy now/i }).click()

      // redirecionar para a pagina de sucess
      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      // mostrar o texto de sucesso
      cy.findByRole('heading', {
        name: /Your purchase was successful!/i
      }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.signIn(user.email, user.password)
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/profile/orders`
      )

      cy.getByDataCy('game-item').should('have.length', 2)
    })
  })

  describe('Paid Games', () => {})
})
