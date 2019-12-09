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