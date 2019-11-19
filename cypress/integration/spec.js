describe('cy issue hash with delay', () => {
	beforeEach(function () {
		cy.visit("index.html")
	})

	it('change hash with delay', () => {
		cy.get('#my-link').contains('CLICK ME').click();
		
		cy.wait(1000);

		cy.get('#my-link').contains('CLICK ME')
	})
})