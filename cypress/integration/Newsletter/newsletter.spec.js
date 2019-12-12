const Pages = require('../../pageobjects/pages.json')
const Testdata = require('../../testdata/testdata.json')
const I = require('../../testbase/testbase')
var baseUrl='https://automation9352.azurewebsites.net'

context('NewsletterCB', () => {
    beforeEach(() => {
        cy.visit(baseUrl)
      })

    it('LoginAsB2B Customer', () => {
        I.Click(Pages.HomePage.Login)
        I.Fill(Pages.LoginPage.Email, Testdata.B2BCustomer.Email)
        I.Fill(Pages.LoginPage.Password, Testdata.B2BCustomer.Password)
        I.Click(Pages.LoginPage.LoginButton)
        I.MouseHover(Pages.HomePage.AccountMenu.Icon)
        I.SeeText(Pages.HomePage.AccountMenu.Username, Testdata.B2BCustomer.Username)
    })
})