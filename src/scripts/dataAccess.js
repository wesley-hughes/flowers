const applicationState = {
    flowers: []
}
const API = "http://localhost:8088"

export const fetchFlowers = () => {
    return fetch(`${API}/flowers`)
        .then(res => res.json())
        .then(
            (data) =>
                applicationState.flowers = data
        )
}

export const getFlowers = () => applicationState.flowers.map(flower => ({ ...flower }))



export const fetchRetailers = () => {
    return fetch(`${API}/retailers`)
        .then(res => res.json())
        .then(
            (data) =>
                applicationState.retailers = data
        )
}

export const getRetailers = () => applicationState.retailers.map(retailer => ({ ...retailer }))



export const fetchDistributors = () => {
    return fetch(`${API}/distributors`)
        .then(res => res.json())
        .then(
            (data) =>
                applicationState.distributors = data
        )
}

export const getDistributors = () => applicationState.distributors.map(distributor => ({ ...distributor }))



export const fetchNurseries = () => {
    return fetch(`${API}/nurseries`)
        .then(res => res.json())
        .then(
            (data) =>
                applicationState.nurseries = data
        )
}

export const getNurseries = () => applicationState.nurseries.map(nursery => ({ ...nursery }))



export const fetchNurseryFlowers = () => {
    return fetch(`${API}/nurseryFlowers`)
        .then(res => res.json())
        .then(
            (data) =>
                applicationState.nurseryFlowers = data
        )
}

export const getNurseryFlowers = () => applicationState.nurseryFlowers.map(nurseryFlower => ({ ...nurseryFlower }))



export const fetchDistributorNurseries = () => {
    return fetch(`${API}/distributorNurseries`)
        .then(res => res.json())
        .then(
            (data) =>
                applicationState.distributorNurseries = data
        )
}

export const getDistributorNurseries = () => applicationState.distributorNurseries.map(distributorNursery => ({ ...distributorNursery }))