const Pages = require('../../pageobjects/pages.json')
const Testdata = require('../../testdata/testdata.json')
const I = require('../../testbase/testbase')
const FlexiPage = require('../../pageobjects/flexiPage.json')
const Admin = require('../../pageobjects/adminPages.json')
import { I_AddNewsletterContentBlockToFlexiPage } from '../Newsletter/newsletterHelpers'
var baseUrl='https://automation9352.azurewebsites.net'

context('NewsletterCB', () => {
    beforeEach(() => {
        cy.visit(baseUrl)
      })

    it('Newsletter_ViewNewsletter_OnFlexiPage', () => {
        //I.Click(Pages.HomePage.Login)
        //I.Fill(Pages.LoginPage.Email, Testdata.B2BCustomer.Email)
        //I.Fill(Pages.LoginPage.Password, Testdata.B2BCustomer.Password)
        //I.Click(Pages.LoginPage.LoginButton)
        //I.MouseHover(Pages.HomePage.AccountMenu.Icon)
        //I.SeeText(Pages.HomePage.AccountMenu.Username, Testdata.B2BCustomer.Username)

        I_AddNewsletterContentBlockToFlexiPage();
        I.Click(Admin.EditFlexiPage.SaveButton);
        I.RefreshSiteCache();
        I.Open(FlexiPage, Testdata.Addons.Newsletter.FlexiPageUrl);
        I.SeeInTitle(Testdata.Addons.Newsletter.FlexiPageTitle);
        I.See(FlexiPage.NewsletterContentBlock);
    })
})