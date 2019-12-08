import '../testbase/I.spec'
const pages = require('../pageobjects/pages.json')
const testdata = require('../testdata/testdata.json')
const baseUrl = 'https://www.google.com'
const I = require('../testbase/I.spec')

context('NewsletterCB', () => {
    beforeEach(() => {
        cy.visit(baseUrl)
      })

    it('LoginAsB2B Customer', () => {
        I.Fill(pages.loginpage.email, testdata.B2BCustomer.email)
        I.Fill(pages.loginpage.password, testdata.B2BCustomer.password)
        I.Click(pages.loginpage.loginbutton)
        I.MouseHover(pages.homepage.accountmenu.icon)
        I.SeeText(pages.homepage.accountmenu.username, testdata.B2BCustomer.username)
        I.Click(pages.loginpage.testdata)
    })
})