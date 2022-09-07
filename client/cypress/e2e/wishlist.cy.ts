describe('Wishlist', () => {
  it('should add and remove games from wishlist', () => {
    // acessar a pagina de wishlist nao logado
    cy.visit('/wishlist')

    // redireciona e faz login
    cy.signIn()

    // verifica se a wishlist esta vazia
    cy.findByRole('heading', { name: /Your wishlist is empty/i }).should(
      'exist'
    )

    // pega um jogo e adiciona na wishlist
    cy.getByDataCy('You may like these games!').within(() => {
      cy.getByDataCy('game-card')
        .eq(0)
        .within(() => {
          cy.findByLabelText(/Add to wishlist/i).click()
        })
    })

    // verifica se o jogo foi adicionado na wishlist
    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })

    // remover o item da wishlist
    cy.getByDataCy('wishlist').within(() => {
      cy.findByLabelText(/remove from wishlist/i).click()
    })

    // verifica se a wishlist esta vazia
    cy.findByRole('heading', { name: /Your wishlist is empty/i }).should(
      'exist'
    )
  })
})
