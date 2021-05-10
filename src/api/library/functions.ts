export function parseLixeiraToPlainObject(query) {
    //console.log("AHOY!")
    const lixeiras = JSON.parse(JSON.stringify(query)).map(lixeira => ({
        ...lixeira,
        _id: undefined,
        __v: undefined,
        id: lixeira._id
    }))
    return lixeiras
}



