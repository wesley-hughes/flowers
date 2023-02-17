import { getDistributorNurseries, getFlowers, getNurseries, getNurseryFlowers, getRetailers } from "./dataAccess.js";
import { getDistributors } from "./dataAccess.js";

const retailerListItems = (retailer) => {
    const distributors = getDistributors()
    const distributorNurseries = getDistributorNurseries()
    const flowers = getFlowers()
    const nurseryFlowers = getNurseryFlowers()
    const nurseries = getNurseries()
    const foundDistributor = distributors.find((distributor) => distributor.id === retailer.distributorId)
    const foundDistributorNurseries = distributorNurseries.filter((distributorNursery) => distributorNursery.distributorId === foundDistributor.id) 
    const foundNurseries = foundDistributorNurseries.map((foundDistributorNursery) => nurseries.find((nursery) => nursery.id === foundDistributorNursery.nurseryId))
    const foundNurseryFlowers = foundNurseries.map((foundNursery) => nurseryFlowers.filter((nurseryFlower) => nurseryFlower.nurseryId === foundNursery.id))
    const foundFlowers = foundNurseryFlowers.map((foundNurseryFlower) => foundNurseryFlower.map((nurFlow) => flowers.find((flower) => flower.id === nurFlow.flowerId)))
    
    let html = ""
html += `<li>Retailer: ${retailer.name}
        <br>
        Distributor: ${foundDistributor.name}
        <br>
    `
html += `Nurseries: `
    let nurseryNames = foundNurseries.map((nursery) => nursery.name)
    const nurseryNameList = nurseryNames.join(" & ")
html += `${nurseryNameList}<br>`

html += `Flowers: `
    let flowerNames = foundFlowers.map((foundFlower) => foundFlower.map((FF) => FF.commonName))
    let list = flowerNames.map((flowerName) => flowerName.join(" , "))
    let finalList = list.join(" , ")
html += `${finalList}</li>`
return html
}

export const RetailerList = () => {
    const retailers = getRetailers()
    let html = ""
    let listItems = retailers.map(retailerListItems)
    html += `<div>
            <ul>${listItems.join("")}</ul>
            </div>`

return html
}










//     html += `<li>${retailer.name}`
//     const retailerDistributor = distributors.filter((distributor) => distributor.id === retailer.distributorId)
   
//     // let listItems = retailerDistributors.map((retailerDistributor) => {
//     //     return ` ${retailerDistributor.name}`
//     // })
//     const filteredDistributorNurseries = nurseries.filter((nursery) => nursery.Id === retailerDistributor.nurseryId)

//     // filteredDistributorNurseries.map((filteredDistributorNursery) => {
//     //     html+= `${filteredDistributorNursery.name}`
//     //     return html
//     // })
// filteredDistributorNurseries.map((filteredDistributorNursery) => {
//     html += `${filteredDistributorNursery.name}`
//     return html
// })
// //     for (const nurseryFlower of nurseryFlowers) {
// //         for (const flower of flowers) {
// //             if (flower.id === nurseryFlower.flowerId) {
// //                 return `${flower.cmmonName}`
// //             }
// //  }
// //     }

//     html += `</li>`
//     return html