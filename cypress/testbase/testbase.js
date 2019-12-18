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

export function Open(pagetype, url)
{
    if(url.includes("https://"))
        cy.visit(url);
    else if(pagetype.includes("Admin_"))
    {
        cy.visit(Cypress.config().baseUrl + "/admin/" + AdminPagesMapping(pagetype));
    }
    else if(pagetype.toLocaleLowerCase().includes("home"))
        cy.visit(Cypress.config().baseUrl);
    else if(pagetype.includes("FlexiPage"))
        cy.visit(Cypress.config().baseUrl + "/" + url);
}

export function AdminPagesMapping(pageName)
{
    switch(pageName)
    {
        case "Admin_FlexiPage":
            return Admin.FlexiPage.Url;
        case "Admin_CreateFlexiPage":
            return Admin.CreateFlexiPage.Url;
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
    I.Click('.btn-invert');
    I.Fill('.dropdown-menu > .form-group input', flexiPageUrl);
    I.Click('.dropdown-menu > .buttons .btn-primary');
    cy.get('body').then((body) => {
        if(body.find('.table-sana tbody tr').length>0){
            cy.get('.table-sana tbody tr').its('length').should('be.gte', 0);
            cy.wait(500);
            cy.get('.table-sana tbody tr td a[href="/admin/flexipages/delete"]').first().click();
            cy.get('.modal-footer > .btn-primary').click({force:true});
            I.RefreshSiteCache();
        }
    })
}

export function RefreshSiteCache()
{
    I.LoginToAdminIfNeeded();
    I.Click('.navbar .navbar-right #toolsmenu .dropdown-toggle');
    cy.get(Admin.Layout.Tools.RefreshSiteCache).then(($rsbutn) =>{
        if($rsbutn.is(':visible'))
        {
            cy.get(Admin.Layout.Tools.RefreshSiteCache).click();
        }
        else
        {
            I.Click('.navbar .navbar-right #toolsmenu .dropdown-toggle');
            cy.get(Admin.Layout.Tools.RefreshSiteCache).click({fore:true});
        }
    })
}

export function PrepareFlexiPageForCheck(flexiPageTitle, flexiPageUrl, withSave=true)
{
    I.DeleteWebPageIfItExists(flexiPageUrl);
    //I.RemoveUrlRedirectIfItExists(flexiPageUrl);
    I.Open("Admin_CreateFlexiPage", "");
    I.Fill(Admin.CreateFlexiPage.Title, flexiPageTitle);
    I.Fill(Admin.CreateFlexiPage.UrlField, flexiPageUrl);
    if (withSave)
        I.Click(Admin.CreateFlexiPage.SaveChangesButton);
}

export function SearchAdminWebPage(flexiPageUrl)
{
    cy.get(Controls.SearchBox.Opener).then(($opener) => {
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
            I.ClearAndFill(Controls.SearchBox.SearchByTitle, flexiPageUrl);
            I.Press(Keys.Enter);
        }
    })
}

export function Press(key)
{
    c.gey('body').type(key);
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