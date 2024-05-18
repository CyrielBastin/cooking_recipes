// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('http://127.0.0.1:3000/')
    cy.contains('h1', 'Hello World')
  })
})
