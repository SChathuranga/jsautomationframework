const Pages = require('../../pageobjects/pages.json')
const Testdata = require('../../testdata/testdata.json')
const I = require('../../testbase/testbase')

export function I_AddNewsletterContentBlockToFlexiPage()
{
    I.Open(Admin_FlexiPage);
    I.LoginToAdminIfNeeded();
    I.PrepareFlexiPageForCheck(TestData.Addons.Newsletter.FlexiPageTitle, TestData.Addons.Newsletter.FlexiPageUrl);
    I.SearchAdminWebPage(Admin_FlexiPage.SearchBox, TestData.Addons.Newsletter.FlexiPageUrl);
    I.Click(Admin_FlexiPage.Table.Lines[0].EditButton);
    I.AmOn(Admin_EditFlexiPage);
    I.Click(Admin_EditFlexiPage.ContentElements.AddElement.Opener);
    I.Click(Admin_EditFlexiPage.ContentElements.AddElement.Items[Newsletter]);
    I.See(Admin_EditFlexiPage.Newsletter);
    I.Fill(Admin_EditFlexiPage.Newsletter.Title, TestData.Addons.Newsletter.GeneralSettings.Title);
    I.Clear(Admin_EditFlexiPage.Newsletter.TitleColor);
    I.Fill(Admin_EditFlexiPage.Newsletter.TitleColor, TestData.Addons.Newsletter.GeneralSettings.TitleColor);
    I.Fill(Admin_EditFlexiPage.Newsletter.Subtitle, TestData.Addons.Newsletter.GeneralSettings.Subtitle);
    I.Clear(Admin_EditFlexiPage.Newsletter.SubtitleColor);
    I.Fill(Admin_EditFlexiPage.Newsletter.SubtitleColor, TestData.Addons.Newsletter.GeneralSettings.SubtitleColor);
    I.Fill(Admin_EditFlexiPage.Newsletter.EmailFieldText, TestData.Addons.Newsletter.GeneralSettings.EmailFieldText);
    I.Clear(Admin_EditFlexiPage.Newsletter.SubscribeButtonText);
    I.Fill(Admin_EditFlexiPage.Newsletter.SubscribeButtonText, TestData.Addons.Newsletter.GeneralSettings.SubscribeButtonText);
    I.Clear(Admin_EditFlexiPage.Newsletter.BackgroundColor);
    I.Fill(Admin_EditFlexiPage.Newsletter.BackgroundColor, TestData.Addons.Newsletter.BackgroundSettings.BackgroundColor);
    I.Fill(Addons.Newsletter.FlexiPageTitle)
}