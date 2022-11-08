import { getVeggies, setVeggie } from "./database.js"

const veggies = getVeggies()

docment.addEventListener("change", (event) => {
    if (event.target.name === "vegetable") {
        setVeggie(event.target.value)
    }
})

export const Veggies = () => {

    let html = `<ul>
        ${
            vegies.map(vegtable => {
                return `<li>
                            <input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type}
                        </li>`
            }).join("")
        }
    </ul>`

    return html
}
