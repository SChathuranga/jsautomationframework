const Testdata = require('../../testdata/testdata.json')
const I = require('../../testbase/testbase')
const Admin = require('../../pageobjects/adminPages.json')

export function I_AddNewsletterContentBlockToFlexiPage()
{
    I.Open("Admin_FlexiPage", " ");
    I.LoginToAdminIfNeeded();
    I.Open("Admin_FlexiPage", " ");
    I.PrepareFlexiPageForCheck(Testdata.Addons.Newsletter.FlexiPageTitle, Testdata.Addons.Newsletter.FlexiPageUrl);
    I.SearchAdminWebPage(Admin.FlexiPage.SearchBox, Testdata.Addons.Newsletter.FlexiPageUrl);
    I.Click(Admin.FlexiPage.Table.Lines.EditButton);
    I.AmOn(Admin.EditFlexiPage);
    I.Click(Admin.EditFlexiPage.ContentElements.AddElement.Opener);
    I.Click(Admin.EditFlexiPage.ContentElements.AddElement.Newsletter);
    I.See(Admin.EditFlexiPage.Newsletter.ContentBlock);
    I.Fill(Admin.EditFlexiPage.Newsletter.Title, Testdata.Addons.Newsletter.GeneralSettings.Title);
    I.Clear(Admin.EditFlexiPage.Newsletter.TitleColor);
    I.Fill(Admin.EditFlexiPage.Newsletter.TitleColor, Testdata.Addons.Newsletter.GeneralSettings.TitleColor);
    I.Fill(Admin.EditFlexiPage.Newsletter.Subtitle, Testdata.Addons.Newsletter.GeneralSettings.Subtitle);
    I.Clear(Admin.EditFlexiPage.Newsletter.SubtitleColor);
    I.Fill(Admin.EditFlexiPage.Newsletter.SubtitleColor, Testdata.Addons.Newsletter.GeneralSettings.SubtitleColor);
    I.Fill(Admin.EditFlexiPage.Newsletter.EmailFieldText, Testdata.Addons.Newsletter.GeneralSettings.EmailFieldText);
    I.Clear(Admin.EditFlexiPage.Newsletter.SubscribeButtonText);
    I.Fill(Admin.EditFlexiPage.Newsletter.SubscribeButtonText, Testdata.Addons.Newsletter.GeneralSettings.SubscribeButtonText);
    I.Clear(Admin.EditFlexiPage.Newsletter.BackgroundColor);
    I.Fill(Admin.EditFlexiPage.Newsletter.BackgroundColor, Testdata.Addons.Newsletter.BackgroundSettings.BackgroundColor);
}