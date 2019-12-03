import {Open, IClick, Click, Fill, IOpen, IFill, IMouseHover} from '../testbase/I.spec'
import '../pageobjects/loginpage.yml'

context('AddProducts', () => {
    beforeEach(() => {
        cy.visit('http://webapp.sana.dev.corp.ism.nl/')
      })

    it('OpenPage', () => {
        var baseUrl='http://webapp.sana.dev.corp.ism.nl/'
        IOpen(baseUrl)
        cy.xpath('//a[@class="MainNav_hyp-top-lvl"]/span[contains(text(),"Catalog")]').click()
    })
})