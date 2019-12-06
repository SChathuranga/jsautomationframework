import {Open, IClick, Click, Fill, IOpen, IFill, IMouseHover} from '../testbase/I.spec'
import '../pageobjects/loginpage.yml'

context('AddProducts', () => {
    beforeEach(() => {
        cy.visit('http://webapp.sana.dev.corp.ism.nl/')
      })

    it('OpenPage', () => {
        var baseUrl='http://webapp.sana.dev.corp.ism.nl/'
        IOpen(baseUrl)
        //Click('//*[@id="header"]/div[1]/div/div[2]/div[5]')
        //IClick('.hover > .MainNav_hyp-container > .MainNav_hyp-top-lvl')
        Click('//*[@id="header"]/div[1]/div/div[2]/div[5]')
    })
})