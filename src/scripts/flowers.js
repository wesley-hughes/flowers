import { getFlowers } from "./dataAccess.js"



const FlowerListItems = (flower) => {
    let html = ""
    html += `<li>${flower.commonName} is ${flower.color}</li>`
    return html
}

export const FlowerList = () => {
    const flowers = getFlowers()
let html = ""
html += `<div><ul>`
let listItems = flowers.map(FlowerListItems)
html += listItems.join("")
html += `</div></ul>`
return html
}