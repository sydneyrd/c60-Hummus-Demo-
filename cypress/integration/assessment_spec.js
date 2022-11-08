describe('Test the display of all options', () => {
    it('Contains the main entrees', () => {
        cy.visit('http://127.0.0.1:3000')

        cy.get(".choices__base").contains("Hummus and Hot Sauce")
        cy.get(".choices__base").contains("Chicken Fried Lamb Kabob")
        cy.get(".choices__base").contains("Hot Chicken Greek Salad")
        cy.get(".choices__base").contains("Brussel Sprout Moussaka")
        cy.get(".choices__base").contains("Okrakopita")
        cy.get(".choices__base").contains("Fried Onion and Grape Leaves")
        cy.get(".choices__base").contains("Chess Baklava")
        cy.get(".choices__base").contains("Gyro Biscuits")
        cy.get(".choices__base").contains("Black Eye Pea Falafel")
        cy.get(".choices__base").contains("Pecan Pastitsio")
    })

    it('Contains the vegetable choices', () => {
        cy.visit('http://127.0.0.1:3000')

        cy.get(".choices__veggies").contains("Okra")
        cy.get(".choices__veggies").contains("Collard Greens")
        cy.get(".choices__veggies").contains("Fried Green Tomatoes")
        cy.get(".choices__veggies").contains("Swiss Chard")
        cy.get(".choices__veggies").contains("Corn")
        cy.get(".choices__veggies").contains("Brussel Sprouts")
        cy.get(".choices__veggies").contains("Sweet Potatoes")
        cy.get(".choices__veggies").contains("Grits")
        cy.get(".choices__veggies").contains("Mac and Feta Cheese")
    })

    it('Contains the side dishes', () => {
        cy.visit('http://127.0.0.1:3000')

        cy.get(".choices__sides").contains("Chicken Fried Steak Poppers")
        cy.get(".choices__sides").contains("Bacon")
        cy.get(".choices__sides").contains("Turkey Wings")
        cy.get(".choices__sides").contains("BBQ Lamb Ribs")
        cy.get(".choices__sides").contains("Catfish Nuggets")
        cy.get(".choices__sides").contains("Mini Souvlaki")
    })
})

describe('Generated input fields', () => {
    it('Has radio inputs with correct value', () => {
        cy.get('input[name="entree"]')
            .should('have.value', '1')
    })
})


describe('Tests purchasing a full meal', () => {
    it('Records new purchases', () => {
        cy.visit('http://127.0.0.1:3000')

        const baseOption = cy.get(".choices__base").contains("Hot Chicken Greek Salad")

        cy.get('input[name="entree"]').check("2")
        cy.get('input[name="vegetable"]').check("5")
        cy.get('input[name="sideDish"]').check("3")
        const purchaseButton = cy.get("#purchase")

        purchaseButton.click()
            .then(() => {
                cy.get(".customerOrders").contains("Receipt #1 =")
            })
            .then(() => {
                cy.get('input[name="entree"]').check("8")
                cy.get('input[name="vegetable"]').check("7")
                cy.get('input[name="sideDish"]').check("2")
            })
            .then(() => cy.get("#purchase").click())
            .then(() => {
                cy.get(".customerOrders").contains("Receipt #2 =")
            })
            .then(() => {
                cy.get('input[name="entree"]').check("1")
                cy.get('input[name="vegetable"]').check("1")
                cy.get('input[name="sideDish"]').check("1")
            })
            .then(() => cy.get("#purchase").click())
            .then(() => {
                cy.get(".customerOrders").contains("Receipt #3 =")
            })
    })
})
