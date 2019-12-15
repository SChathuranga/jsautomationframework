const Testdata = require('../../testdata/testdata.json')
const Controls = require('../pageobjects/controls.json')
const Admin = require('../pageobjects/AdminPages.json')

export function IOpen(url)
{
    if(url.includes("https://"))
        cy.visit(url)
    else
        cy.visit(Cypress.config().baseUrl + url)
}

export function Click(locator)
{
    if(locator.includes('//'))
        cy.xpath(locator).click();
    else
        cy.get(locator).click();
}

export function Fill(locator, text)
{
    if(locator.includes('//'))
        cy.xpath(locator).type(text);
    else
        cy.get(locator).type(text);
}

export function ClearAndFill(locator, text)
{
    if(locator.includes('//'))
    {
        cy.xpath(locator).clear();
        cy.xpath(locator).type(text);
    }
    else
    {
        cy.get(locator).clear();
        cy.get(locator).type(text);
    }
}

export function MouseHover(locator)
{
    if(locator.includes('//'))
        cy.xpath(locator).trigger('mouseover')
    else
        cy.get(locator).trigger('mouseover')
}

export function SeeText(locator, expectedText)
{
    if(locator.includes('//'))
        cy.xpath(locator).should('contain', expectedText)
    else
        cy.get(locator).should('contain', expectedText)
}

export function DoubleClick(locator)
{
    if(locator.includes('//'))
        cy.get(locator).dblclick()
    else
        cy.get(locator).dblclick()
}

export function Rightclick(locator)
{
    if(locator.includes('//'))
        cy.get(locator).rightclick()
    else
        cy.get(locator).rightclick()
}

export function Check(locator, option)
{
    if(locator.includes('//'))
        cy.get(locator).check(option)
    else
        cy.get(locator).check(option)
}

export function Select(locator, option)
{
    if(locator.includes('//'))
        cy.get(locator).select(option)
    else
        cy.get(locator).select(option)
}

export function LoginToAdminIfNeeded()
{
    cy.get('btn-logout').then(($logout) => {
        if($logout.is(':visible'))
            return;
        else
        {
            cy.visit('https://automation9351.azurewebsites.net/admin');
            cy.get('.row-email input').type(Testdata.Admin.Users.SysAdmin.TestUserEmail);
            cy.get('.row-password input').type(Testdata.Admin.Users.SysAdmin.TestUserPassword);
            cy.get('btn-login').click();
        }
    })
}

export function DeleteWebPageIfItExists(flexiPageUrl)
{
    cy.get(searchBox.Opener).then(($opener) => {
        if($opener.is(':visible'))
        {
            I.Click(Controls.SearchBox.Opener);
            I.Fill(Controls.SearchBox.SearchByUrl, flexiPageUrl);
            I.Click(Controls.SearchBox.SearchButton);
        }
        else
        {
            I.Fill(Controls.SearchBox.SearchByUrl, flexiPageUrl);
            I.Press(Keys.Enter);
        }
        
        if (table.Lines.Count > 0)
        {
            I.Click(Controls.Table.Lines.First().DeleteButton);
            I.Click(AllPages.Admin.Layout.Confirmation.Confirm);
            I.RefreshSiteCache();
        }
    })
}

export function RefreshSiteCache()
{
    I.Open(Admin_HomePage);
    I.LoginToAdminIfNeeded();
    I.Click(Admin.Layout.Tools.Opener);
    I.Click(Admin.Layout.Tools.RefreshSiteCache);
}

export function PrepareFlexiPageForCheck(flexiPageTitle, flexiPageUrl, withSave=true)
{
    I.DeleteWebPageIfItExists(Admin.FlexiPage.SearchBox, Admin.FlexiPage.Table, flexiPageUrl);
    I.RemoveUrlRedirectIfItExists(flexiPageUrl);
    I.Open(Admin.CreateFlexiPage);
    I.Fill(Admin.CreateFlexiPage.Title, flexiPageTitle);
    I.Fill(Admin.CreateFlexiPage.UrlField, flexiPageUrl);
    if (withSave)
        I.Click(Admin.CreateFlexiPage.SaveChangesButton);
}

export function SearchAdminWebPage()
{

}

export function AmOn(pageName)
{
    cy.url().should('include', pageName);
}

export function See(locator)
{
    cy.get(locator).then(($element) => {
        if($element.is(':visible'))
            return
        else
            cy.get(locator);
    })
}

export function Clear(locator)
{
    if(locator.includes('//'))
        cy.xpath(locator).clear();
    else
        cy.get(locator).clear();
}