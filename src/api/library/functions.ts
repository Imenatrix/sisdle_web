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

export enum colorCodes {
    Green = 32,
    Red = 31,
    Gray = 90,
}

export function coloredMessage(msg, color: colorCodes) {


    return '\u001b[' + color + 'm' + msg + '\u001b[0m'
}



