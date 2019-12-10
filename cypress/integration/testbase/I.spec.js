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

export function Check(locator, expectedText)
{
    if(locator.includes('//'))
        cy.get(locator).check(expectedText)
    else
        cy.get(locator).check(expectedText)
}

export function Check(locator, expectedText)
{
    if(locator.includes('//'))
        cy.get(locator).select(expectedText)
    else
        cy.get(locator).select(expectedText)
}