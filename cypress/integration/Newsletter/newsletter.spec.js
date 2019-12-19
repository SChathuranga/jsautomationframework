const TestData = require('../../Testdata/Testdata.json')
const I = require('../../testbase/testbase')
const FlexiPage = require('../../pageobjects/flexiPage.json')
const Admin = require('../../pageobjects/adminPages.json')
const Keys = require('../../support/keys.json')
import { I_AddNewsletterContentBlockToFlexiPage } from '../Newsletter/newsletterHelpers'

context('NewsletterCB', () => {
    it('Newsletter_ViewNewsletter_OnFlexiPage', () => {
        I_AddNewsletterContentBlockToFlexiPage();
        I.Click(Admin.EditFlexiPage.SaveButton);
        I.Wait(500)
        I.RefreshSiteCache();
        I.Open("FlexiPage", TestData.Addons.Newsletter.FlexiPageUrl);
        I.SeeInTitle(TestData.Addons.Newsletter.FlexiPageTitle);
        I.See(FlexiPage.NewsletterContentBlock.ContentBlock);
    })

    it('Newsletter_VerifyRequiredFields_OnFlexiPage', () =>{
            I.Open("Admin_FlexiPage");
            I.LoginToAdminIfNeeded();
            I.PrepareFlexiPageForCheck(TestData.Addons.Newsletter.FlexiPageTitle, TestData.Addons.Newsletter.FlexiPageUrl);
            I.SearchAdminWebPage(Admin.FlexiPage.SearchBox, TestData.Addons.Newsletter.FlexiPageUrl);
            I.Click(Admin.FlexiPage.Table.Line.EditButton);
            I.AmOn("Admin_EditFlexiPage");
            I.Click(Admin.EditFlexiPage.ContentElements.AddElement.Opener);
            I.Click(Admin.EditFlexiPage.ContentElements.AddElement.Newsletter);
            I.See(Admin.EditFlexiPage.Newsletter);
            I.Click(Admin.EditFlexiPage.SaveButton);
            I.See(Admin.EditFlexiPage.Newsletter.BackgroundColorValidation);
            I.Click(Admin.EditFlexiPage.Newsletter.BackgroundImageToggleButton);
            I.Click(Admin.EditFlexiPage.SaveButton);
            I.See(Admin.EditFlexiPage.Newsletter.BackgroundImageValidation);
    })
})