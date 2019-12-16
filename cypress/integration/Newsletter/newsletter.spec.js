const Pages = require('../../pageobjects/pages.json')
const Testdata = require('../../testdata/testdata.json')
const I = require('../../testbase/testbase')
const FlexiPage = require('../../pageobjects/flexiPage.json')
const Admin = require('../../pageobjects/adminPages.json')
import { I_AddNewsletterContentBlockToFlexiPage } from '../Newsletter/newsletterHelpers'

context('NewsletterCB', () => {
    it('Newsletter_ViewNewsletter_OnFlexiPage', () => {
        I_AddNewsletterContentBlockToFlexiPage();
        cy.pause();
        I.Click(Admin.EditFlexiPage.SaveButton);
        I.RefreshSiteCache();
        I.Open("FlexiPage", Testdata.Addons.Newsletter.FlexiPageUrl);
        I.SeeInTitle(Testdata.Addons.Newsletter.FlexiPageTitle);
        I.See(FlexiPage.NewsletterContentBlock.ContentBlock);
    })
})