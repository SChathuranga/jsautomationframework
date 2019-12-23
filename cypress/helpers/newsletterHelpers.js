import {Admin_EditFlexiPage, Admin_FlexiPage} from "../testbase/testbase";
const TestData = require('../testdata/testdata.json')
const I = require('../testbase/testbase')
const Admin = require('../pageobjects/adminPages.json')

export function I_AddNewsletterContentBlockToFlexiPage()
{
    I.Open(Admin_FlexiPage);
    I.LoginToAdminIfNeeded();
    I.PrepareFlexiPageForCheck(TestData.Addons.Newsletter.FlexiPageTitle, TestData.Addons.Newsletter.FlexiPageUrl);
    I.SearchAdminWebPage(Admin.FlexiPage.SearchBox, TestData.Addons.Newsletter.FlexiPageUrl);
    I.Click(Admin.FlexiPage.Table.Line.EditButton);
    I.AmOn(Admin_EditFlexiPage);
    I.Click(Admin.EditFlexiPage.ContentElements.AddElement.Opener);
    I.Click(Admin.EditFlexiPage.ContentElements.AddElement.Newsletter);
    I.See(Admin.EditFlexiPage.Newsletter.ContentBlock);
    I.Fill(Admin.EditFlexiPage.Newsletter.Title, TestData.Addons.Newsletter.GeneralSettings.Title);
    I.Clear(Admin.EditFlexiPage.Newsletter.TitleColor);
    I.Fill(Admin.EditFlexiPage.Newsletter.TitleColor, TestData.Addons.Newsletter.GeneralSettings.TitleColor);
    I.Fill(Admin.EditFlexiPage.Newsletter.Subtitle, TestData.Addons.Newsletter.GeneralSettings.Subtitle);
    I.Clear(Admin.EditFlexiPage.Newsletter.SubtitleColor);
    I.Fill(Admin.EditFlexiPage.Newsletter.SubtitleColor, TestData.Addons.Newsletter.GeneralSettings.SubtitleColor);
    I.Fill(Admin.EditFlexiPage.Newsletter.EmailFieldText, TestData.Addons.Newsletter.GeneralSettings.EmailFieldText);
    I.Clear(Admin.EditFlexiPage.Newsletter.SubscribeButtonText);
    I.Fill(Admin.EditFlexiPage.Newsletter.SubscribeButtonText, TestData.Addons.Newsletter.GeneralSettings.SubscribeButtonText);
    I.Clear(Admin.EditFlexiPage.Newsletter.BackgroundColor);
    I.Fill(Admin.EditFlexiPage.Newsletter.BackgroundColor, TestData.Addons.Newsletter.BackgroundSettings.BackgroundColor);
}