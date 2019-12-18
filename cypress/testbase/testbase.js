/// <reference types="Cypress" />
const Testdata = require('../testdata/testdata.json')
const Controls = require('../pageobjects/controls.json')
const Admin = require('../pageobjects/adminPages.json')
const Keys = require('../support/keys.json')
const I = require('../testbase/testbase')

export function IOpen(url)
{
    if(url.includes("https://"))
        cy.visit(url)
    else if(url.toLocaleLowerCase().includes("admin"))
        cy.visit(Cypress.config().baseUrl+"/" + url)
}

export function Open(pagetype, url="")
{
    if(url.includes("https://"))
        cy.visit(url);
    else if(pagetype.includes("Admin_"))
    {
        cy.visit(Cypress.config().baseUrl + "/admin/" + AdminPagesUrlMapping(pagetype));
    }
    else if(pagetype.toLocaleLowerCase().includes("home"))
        cy.visit(Cypress.config().baseUrl);
    else if(pagetype.includes("FlexiPage"))
        cy.visit(Cypress.config().baseUrl + "/" + url);
}

export function AdminPagesUrlMapping(pageName)
{
    switch(pageName)
    {
        case "Admin_FlexiPage":
            return Admin.FlexiPage.Url;
        case "Admin_CreateFlexiPage":
            return Admin.CreateFlexiPage.Url;
        case "Admin_UrlRedirectsPage":
            return Admin.UrlRedirectsPage.Url;
    }
}

export function PagesIdentifierMapping(pageName)
{
    switch(pageName)
    {
        case "Admin_FlexiPage":
            return Admin.FlexiPage.Identifier;
        case "Admin_CreateFlexiPage":
            return Admin.CreateFlexiPage.Identifier;
        case "Admin_UrlRedirectsPage":
            return Admin.UrlRedirectsPage.Identifier;
        case "Admin_EditFlexiPage":
            return Admin.EditFlexiPage.Identifier;
        case "Admin_HomePage":
            return Admin.HomePage.Identifier;
        case "Admin_LoginPage":
            return Admin.LoginPage.Identifier;
    }
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
    cy.get('body').then((body) => {
        if(body.find(Admin.HomePage.LogoutButton).length==0)
        {
            cy.get(Admin.LoginPage.Email).type(Testdata.Admin.Users.SysAdmin.TestUserEmail);
            cy.get(Admin.LoginPage.Password).type(Testdata.Admin.Users.SysAdmin.TestUserPassword);
            cy.get(Admin.LoginPage.LoginButton).click();
            I.AmNotOn(Admin.LoginPage.Url);
        }
    })
}

export function AmNotOn(pageUrl)
{
    cy.url().should('not.contain', pageUrl);
}

export function DeleteWebPageIfItExists(flexiPageUrl)
{
    I.Click(Controls.SearchBox.Opener);
    I.Fill(Controls.SearchBox.SearchByUrl, flexiPageUrl);
    I.Click(Controls.SearchBox.SearchButton);
    cy.get('body').then((body) => {
        if(body.find(Controls.Table.Lines).length>0){
            cy.get(Controls.Table.Lines).its('length').should('be.gte', 0);
            cy.wait(500);
            cy.get(Controls.Table.Line.DeleteButton).first().click();
            cy.get(Admin.Layout.Confirmation.Confirm).click({force:true});
            I.RefreshSiteCache();
        }
    })
}

export function RefreshSiteCache()
{
    I.LoginToAdminIfNeeded();
    I.Click(Admin.Layout.Tools.Opener);
    cy.get(Admin.Layout.Tools.RefreshSiteCache).then(($rsbutn) =>{
        if($rsbutn.is(':visible'))
        {
            cy.get(Admin.Layout.Tools.RefreshSiteCache).click();
        }
        else
        {
            I.Click(Admin.Layout.Tools.Opener);
            cy.get(Admin.Layout.Tools.RefreshSiteCache).click({fore:true});
        }
    })
}

export function PrepareFlexiPageForCheck(flexiPageTitle, flexiPageUrl, withSave=true)
{
    I.DeleteWebPageIfItExists(flexiPageUrl);
    I.RemoveUrlRedirectIfItExists(flexiPageUrl);
    I.Open("Admin_CreateFlexiPage");
    I.Fill(Admin.CreateFlexiPage.Title, flexiPageTitle);
    I.Fill(Admin.CreateFlexiPage.UrlField, flexiPageUrl);
    if (withSave)
        I.Click(Admin.CreateFlexiPage.SaveChangesButton);
}

export function RemoveUrlRedirectIfItExists(flexiPageUrl)
{
    I.Open("Admin_UrlRedirectsPage");
    I.LoginToAdminIfNeeded();
    I.Fill(Admin.UrlRedirectsPage.SearchBox.SearchByAlias, flexiPageUrl)
    I.Press(Keys.Enter)
    cy.wait(500);
    cy.get('body').then((body) => {
        if(body.find(Controls.Table.Lines).length>0){
            cy.get(Controls.Table.Lines).its('length').should('be.gte', 0);
            while(body.find(Controls.Table.Line.DeleteButton).length>0)
            {
                cy.get(Controls.Table.Line.DeleteButton).first().click();
                cy.get(Admin.Layout.Confirmation.Confirm).click({force:true});
            }
            I.RefreshSiteCache();
        }
    })
}

export function SearchAdminWebPage(searchBox, flexiPageUrl)
{
    I.Click(Controls.SearchBox.Opener);
    I.Fill(Controls.SearchBox.SearchByUrl, flexiPageUrl);
    I.Click(Controls.SearchBox.SearchButton);
    I.Wait(50);
    cy.get('body').then((body) => {
        if(body.find(Controls.Table.Lines).length>0){
            cy.get(Controls.Table.Lines).its('length').should('be.gte', 0);
        }
    })
}

export function SetDebugPoint()
{
    cy.pause()
}

export function Wait(miliSeconds)
{
    cy.wait(miliSeconds)
}

export function Press(key)
{
    cy.get('body').type(key)
}

export function AmOn(pageName)
{
    cy.get('body').then((body) => {
        if(body.hasClass(PagesIdentifierMapping(pageName)))
        {
            return
        }
        else
            cy.url().should('include', pageName)
    })
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

export function SeeInTitle(pageTitle)
{
    cy.title().should('contain', pageTitle);
}

export function GetIFrameElement(selector, elementLocator)
{
    cy.get("#page-content  div iframe").then($element=> {
        const $body = $element.contents().find('body');
        let stripe = cy.wrap($body)
        stripe.find('.btn-install').eq(0)
    })
}