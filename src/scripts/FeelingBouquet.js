import { DistributorList } from "./distributors.js";
import { FlowerList } from "./flowers.js";
import { RetailerList } from "./retailers.js";

export const FeelingBouquet = () => {
    let html = ""
    html += `
    <h2>Flowers</h2>
    ${FlowerList()}
    <h2>Retailers</h2>
    ${RetailerList()}
    <h2>Distributors</h2>
    ${DistributorList()}`
    return html
}