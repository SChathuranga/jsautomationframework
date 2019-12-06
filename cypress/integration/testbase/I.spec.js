export function IOpen(url)
{
    cy.visit(url)
}

export function IClick(locator)
{
    console.log(locator)
    console.log('========================== ==============================================')
    if(locator.includes('//'))
    {
        cy.xpath(locator).click();
    }
    else
    {
        cy.get(locator).click();
    } 
    //cy.get(locator).click();
}

export function IFill(locator, text)
{
    cy.get(locator).type(text);
}

export function IMouseHover(locator)
{
    cy.get(locator).trigger('mouseover')
}

export function ISeeText(locator, expectedText)
{
    cy.get(locator).should('contain', expectedText)
}

export function Click(locator)
{
    try
    {
        cy.xpath(locator).click();
    }
    catch(e)
    {
        try 
        {
            cy.get(locator).click();
        } 
        catch (error) 
        {
            console.log(error)
        }
    }
}