import { getVeggies, setVeggie } from "./database.js"

const veggies = getVeggies()

document.addEventListener("change", (event) => {
    if (event.target.name === "vegetable") {
        setVeggie(parseInt(event.target.value))
    }
})

export const Veggies = () => {

    let html = `<ul>${veggies.map(vegetable => {
                return `<li>
                            <input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.name}
                        </li>`
            }).join("")
        }
    </ul>`

    return html
}
