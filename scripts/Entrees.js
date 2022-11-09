import { getEntrees, setEntree } from "./database.js"

const entrees = getEntrees()

document.addEventListener("change", (event) => {
    if (event.target.name === "entree") {
        setEntree(parseInt(event.target.value))
    }
})

export const Entrees = () => {

    let html = `<ul>
        ${
            entrees.map(entree => {
                return `<li>
                            <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
                        </li>`
            }).join("")
        }
    </ul>`

    return html
}
