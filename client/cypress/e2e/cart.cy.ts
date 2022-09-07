describe('Cart', () => {
  it('should add/remove game on cart', () => {
    // visitar a home
    cy.visit('/')

    // procurar um jogo e clicar no carrinho
    cy.addToCartByIndex(0)

    // procurar outro jogo e clicar no botao de carrinho
    cy.addToCartByIndex(1)

    // procurar outro jogo e clicar no botao de carrinho
    cy.addToCartByIndex(2)

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
    cy.removeFromCartByIndex(0)

    // procura pelo jogo adicionado e remove
    cy.removeFromCartByIndex(1)

    // procura pelo jogo adicionado e remove
    cy.removeFromCartByIndex(2)

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
