import { fetchDistributorNurseries, fetchDistributors, fetchFlowers, fetchNurseryFlowers, fetchNurseries, fetchRetailers } from "./dataAccess.js"
import { FeelingBouquet } from "./FeelingBouquet.js"


const mainContainer = document.querySelector("#container")

const renderApp = () => {
    fetchFlowers()
    .then(() => fetchRetailers())
    .then(() => fetchDistributors())
    .then(() => fetchNurseries())
    .then(() => fetchDistributorNurseries())
    .then(() => fetchNurseryFlowers())
        .then(
            () => {
                mainContainer.innerHTML = FeelingBouquet()
            }
        )
}

renderApp()
