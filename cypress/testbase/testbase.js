const Testdata = require('../../testdata/testdata.json')

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

export function PrepareFlexiPageForCheck(flexiPageUrl)
{

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