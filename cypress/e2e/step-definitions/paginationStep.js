const { Given, Then, When } = require("@badeball/cypress-cucumber-preprocessor");
const PaginationPage = require("../../pages/PaginationPage");


const paginationPage = new PaginationPage()


Given('the user is on {string}', (url) => {
	cy.visit(url)
});

 const text = [
    'Pagination',
    'World City Populations 2022',
    
 ]
Then(/^the user should see the "([^"]*)" heading$/, () => {
	paginationPage.getHeader().each(($el,index) => {
        cy.wrap($el).should('have.text', text[index])
    })
});



Then(/^the user should see the "([^"]*)" paragraph$/, (para) => {
	paginationPage.getPara().should('have.text', para)
});

Then(/^the user should see the "([^"]*)" button is disabled$/, (btn) => {
	paginationPage.getBtn(btn).should('be.disabled')
});


Then(/^the user should see the "([^"]*)" button is enabled$/, (btn) => {
	paginationPage.getBtn(btn).should('be.enabled')
});



When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (btn) => {
	paginationPage.getCircle().each(() => {
		paginationPage.getBtn(btn).click({force:true})
	})
});

When(/^the user clicks on the "([^"]*)" button$/, (btn) => {
	paginationPage.getClickBtn(btn)
});


Then(/^the user should see "([^"]*)" City with the info below and an image$/, (city, dataTable) => {
	paginationPage.getCity().should('contain', city)
	
	const info = dataTable.rawTable.flat()
	
	paginationPage.getCityData().each(($el, index) => {
		cy.wrap($el).should('have.text', info[index])
})
	paginationPage.getCityPicture().should('be.visible')
})












