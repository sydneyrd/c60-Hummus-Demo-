const database = {
    entrees: [
        { id: 1, name: "Hummus and Hot Sauce", price: 6.00 },
        { id: 2, name: "Chicken Fried Lamb Kabob", price: 14.25 },
        { id: 3, name: "Hot Chicken Greek Salad", price: 10.50 },
        { id: 4, name: "Brussel Sprout Moussaka", price: 11.50 },
        { id: 5, name: "Okrakopita", price: 8.40 },
        { id: 6, name: "Fried Onion and Grape Leaves", price: 6.95 },
        { id: 7, name: "Chess Baklava", price: 5.30 },
        { id: 8, name: "Gyro Biscuits", price: 8.95 },
        { id: 9, name: "Black Eye Pea Falafel", price: 7.80 },
        { id: 10, name: "Pecan Pastitsio", price: 12.49 }
    ],
    veggies: [
        { id: 1, name: "Okra", price: 2.65 },
        { id: 2, name: "Collard Greens", price: 2.05 },
        { id: 3, name: "Swiss Chard", price: 2.15 },
        { id: 4, name: "Corn", price: 1.75 },
        { id: 5, name: "Brussel Sprouts", price: 3.00 },
        { id: 6, name: "Sweet Potatoes", price: 2.40 },
        { id: 7, name: "Grits", price: 3.05 },
        { id: 8, name: "Fried Green Tomatoes", price: 3.89 },
        { id: 9, name: "Mac and Feta Cheese", price: 2.55 }
    ],
    sides: [
        { id: 1, name: "Chicken Fried Steak Poppers", price: 5.45 },
        { id: 2, name: "Bacon", price: 2.95 },
        { id: 3, name: "Turkey Wings", price: 4.80 },
        { id: 4, name: "BBQ Lamb Ribs", price: 9.25 },
        { id: 5, name: "Catfish Nuggets", price: 6.75 },
        { id: 6, name: "Mini Souvlaki", price: 5.20 }
    ],
    purchases: [{
        id: 1,
        vegId: 1,
        sideId: 1,
        entreeId:1
    }],
    comboChoices: {},
}
export const getVeggies = () => {
    return database.veggies.map(v => ({ ...v }))
}
export const getSides = () => {
    return database.sides.map(spoopy => ({ ...spoopy }))
}
export const getEntrees = () => {
    return database.entrees.map(elephant => ({ ...elephant }))
}
export const getPurchases = () => {
    return database.purchases.map(poop => ({...poop}))
}
export const setVeggie =  (id) => {
database.comboChoices.vegId = id
}
export const setEntree = (id) => {
    database.comboChoices.entreeId = id
}
export const setSide = (id) => {
    database.comboChoices.sideId = id
}
export const addPurchase = () => {
// Copy the current state of user choices
const newOrder = {...database.comboChoices}
// Add a new primary key to the object
// const lastIndex = database.customOrders.length - 1
newOrder.id = database.purchases.length + 1
// Add a timestamp to the order
newOrder.timestamp = Date.now()
// Add the new order object to custom orders state
database.purchases.push(newOrder)
// Reset the temporary state for user choices
database.comboChoices = {}
// *** Broadcast a notification that permanent state has changed *** 
document.dispatchEvent(new CustomEvent("stateChanged"))
}
