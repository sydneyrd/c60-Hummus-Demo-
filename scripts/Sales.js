import { getVeggies, getPurchases, getEntrees, getSides } from "./database.js"

const buildOrderListItem = (order) => {
    const veggies = getVeggies()
    const sides = getSides()
    const entrees = getEntrees()
    const foundEntree = entrees.find((entree) => {return entree.id === order.entreeId})
    const foundSide = sides.find((side) => {return side.id === order.sideId})
    const foundVeg = veggies.find((veg) => {return veg.id === order.vegId})


    const entreePrice = foundEntree.price;
    const veggiePrice = foundVeg.price
    const sidePrice = foundSide.price



    const total = veggiePrice + entreePrice + sidePrice

    return `<li>
        Receipt #${order.id} = ${total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}

export const Sales = () => {
    const sales = getPurchases()
    return `
        <ul>
            ${sales.map(
                (sale) => {
                    // Reflect: What is the scope of this `return` keyword?
                    return buildOrderListItem(sale)
                }
            ).join("")}
        </ul>
    `
}

