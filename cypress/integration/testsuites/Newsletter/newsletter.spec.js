const pages = require('../../pageobjects/pages.json')
const testdata = require('../../testdata/testdata.json')
const I = require('../../testbase/I.spec')
var baseUrl='https://automation9352.azurewebsites.net'

context('NewsletterCB', () => {
    beforeEach(() => {
        cy.visit(baseUrl)
      })

    it('LoginAsB2B Customer', () => {
        I.Click(pages.homepage.login)
        I.Fill(pages.loginpage.email, testdata.B2BCustomer.email)
        I.Fill(pages.loginpage.password, testdata.B2BCustomer.password)
        I.Click(pages.loginpage.loginbutton)
        I.MouseHover(pages.homepage.accountmenu.icon)
        I.SeeText(pages.homepage.accountmenu.username, testdata.B2BCustomer.username)
        
    })
})