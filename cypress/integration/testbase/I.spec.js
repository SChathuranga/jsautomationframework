export function IOpen(url)
{
    cy.visit(url)
};

export function IClick(locator)
{
    cy.get(locator).click();
}

export function IFill(locator, text)
{
    cy.get(locator).type(text);
}

export function IMouseHover(locator)
{
    cy.hover(locator);
}