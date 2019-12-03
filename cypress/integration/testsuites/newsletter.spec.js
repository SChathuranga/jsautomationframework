import {Open, IClick, Click, Fill, IOpen, IFill} from '../testbase/I.spec'
import '../pageobjects/loginpage.yml'

context('NewsletterCB', () => {
    beforeEach(() => {
        cy.visit('https://automation9352.azurewebsites.net')
      })

    it('LoginAsB2B', () => {
        var baseUrl='https://automation9352.azurewebsites.net'
        IOpen(baseUrl)
        cy.pause()
        IFill('#UserName', 'b2b@sana-commerce.com')
        IFill('#Password', 'abcABC@123')
        IClick('.row-actions > .btn')
    })
})