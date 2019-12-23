const TestData = require('../../testdata/testdata.json')
const I = require('../../testbase/testbase')
const FlexiPage = require('../../pageobjects/flexiPage.json')
const Admin = require('../../pageobjects/adminPages.json')
const Keys = require('../../support/keys.json')
import { I_AddNewsletterContentBlockToFlexiPage } from '../../helpers/newsletterHelpers'

context('NewsletterCB', () => {
    it('Newsletter_ViewNewsletter_OnFlexiPage', () => {
        I_AddNewsletterContentBlockToFlexiPage()
        I.Click(Admin.EditFlexiPage.SaveButton)
        I.Wait(500)
        I.RefreshSiteCache();
        I.Wait(500)
        I.Open("FlexiPage", TestData.Addons.Newsletter.FlexiPageUrl)
        I.SeeInTitle(TestData.Addons.Newsletter.FlexiPageTitle)
        I.See(FlexiPage.NewsletterContentBlock.ContentBlock)
    })

    it('Newsletter_VerifyRequiredFields_OnFlexiPage', () =>
    {
        I_AddNewsletterContentBlockToFlexiPage();
        I.Clear(Admin.EditFlexiPage.Newsletter.BackgroundColor)
        I.Click(Admin.EditFlexiPage.SaveButton)
        I.See(Admin.EditFlexiPage.Newsletter.BackgroundColorValidation)
        I.Click(Admin.EditFlexiPage.Newsletter.BackgroundImageToggleButton)
        I.Click(Admin.EditFlexiPage.SaveButton)
        I.See(Admin.EditFlexiPage.Newsletter.BackgroundImageValidation)
    })

    it('Newsletter_VerifyEmailValidation_OnFlexiPage', () => {
        I_AddNewsletterContentBlockToFlexiPage()
        I.Click(Admin.EditFlexiPage.SaveButton)
        I.Wait(500)
        I.RefreshSiteCache()
        I.Wait(500)
        I.Open("FlexiPage", TestData.Addons.Newsletter.FlexiPageUrl)
        I.Click(FlexiPage.NewsletterContentBlock.SubscribeButton)
        I.See(FlexiPage.NewsletterContentBlock.EmailValidator)
    })
})