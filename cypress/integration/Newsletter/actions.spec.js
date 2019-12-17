/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://lasitha935.azurewebsites.net/admin/addons')
  })
  it('.type() - type into a DOM element', () => {
    cy.get('#Email').type('lasitha935@sana.com')
    cy.get('#Password').type('abcABC@123')
    cy.get('.btn-login').click()
    cy.pause();
    console.log(cy.get("#page-content  div iframe"))
    cy.get("#page-content  div iframe").then($element=> {
      const $body = $element.contents().find('body');
      let stripe = cy.wrap($body)
      console.log( stripe.find('.btn-install').eq(0).click())
    })
  })
})
