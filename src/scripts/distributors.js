import { getDistributors , getRetailers } from "./dataAccess.js";


const distributorListItems = (distributor) => {
    const retailers = getRetailers()
const retailerDistributors = retailers.filter((retailer) => retailer.distributorId === distributor.id)
let html = ""
let listItems = retailerDistributors.map((retailerDistributor) => {
    return `<li>${retailerDistributor.name}</li>`
})
html += listItems.join(" ")
return html
}



export const DistributorList = () => {
const distributors = getDistributors()
let html = ""
html += `<div><ul>`
let listItems = distributors.map(distributorListItems)
html += listItems.join("")
html += `</ul></div>`
return html
}