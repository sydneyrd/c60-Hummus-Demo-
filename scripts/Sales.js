import { getVeggies } from "./database.js"

const buildOrderListItem = (order) => {
    const veggies = getVeggies()


    const total = veggiePrice + entreePrice + sidePrice

    return `<li>
        Receipt #${order} = ${total.toLocaleString("en-US", {
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

