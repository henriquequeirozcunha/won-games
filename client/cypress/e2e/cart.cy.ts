describe('Cart', () => {
  it('should add/remove game on cart', () => {
    // visitar a home
    cy.visit('/')

    // procurar um jogo e clicar no carrinho
    cy.getByDataCy('game-card')
      .eq(0)
      .within(() => {
        cy.findByRole('button', { name: /add to cart/i }).click()
      })

    // procurar outro jogo e clicar no botao de carrinho
    cy.getByDataCy('game-card')
      .eq(1)
      .within(() => {
        cy.findByRole('button', { name: /add to cart/i }).click()
      })

    // procurar outro jogo e clicar no botao de carrinho
    cy.getByDataCy('game-card')
      .eq(2)
      .within(() => {
        cy.findByRole('button', { name: /add to cart/i }).click()
      })

    // verificar se o icone de carrinho tem o numero de jogos clicados
    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.text', 3)
      .click()

    // abre o carrinho e verifica se tem jogo la
    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 3)
    })

    // fecha o carrinho
    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.text', 3)
      .click()

    // procura pelo jogo adicionado e remove
    cy.getByDataCy('game-card')
      .eq(0)
      .within(() => {
        cy.findByRole('button', { name: /remove from cart/i }).click()
      })
    // procura pelo jogo adicionado e remove
    cy.getByDataCy('game-card')
      .eq(1)
      .within(() => {
        cy.findByRole('button', { name: /remove from cart/i }).click()
      })

    // procura pelo jogo adicionado e remove
    cy.getByDataCy('game-card')
      .eq(2)
      .within(() => {
        cy.findByRole('button', { name: /remove from cart/i }).click()
      })

    // verifica se o icone do carrinho sumiu
    cy.findAllByLabelText(/cart items/i).should('not.exist')

    // abre o carrinho e verifica se ta vazio
    cy.findAllByLabelText(/shopping cart/i)
      .first()
      .click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading', {
        name: /your cart is empty/i,
        hidden: true
      }).should('exist')
    })
  })
})
