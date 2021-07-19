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

export function coloredMessage(msg, colorCode) {

    /*  
    Color Codes:
    Green: 32
    Red: 31
    */

    return '\u001b[' + colorCode + 'm' + msg + '\u001b[0m'
}



