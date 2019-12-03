import {IClick, IOpen, IFill, IMouseHover, ISeeText} from '../testbase/I.spec'
import '../pageobjects/loginpage.yml'
const pages = require('../pageobjects/pages.json')
const testdata = require('../testdata/testdata.json')
var baseUrl='https://automation9352.azurewebsites.net'

context('NewsletterCB', () => {
    beforeEach(() => {
        cy.visit(baseUrl)
      })

    it('LoginAsB2B Customer', () => {
        IFill(pages.loginpage.email, testdata.B2BCustomer.email)
        IFill(pages.loginpage.password, testdata.B2BCustomer.password)
        IClick(pages.loginpage.loginbutton)
        IMouseHover(pages.homepage.accountmenu.icon)
        ISeeText(pages.homepage.accountmenu.username, testdata.B2BCustomer.username)
    })
})