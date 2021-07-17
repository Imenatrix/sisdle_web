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
    https://github.com/mochajs/mocha/blob/9e95d36e4b715380cef573014dec852bded3f8e1/lib/reporters/base.js#L48
    */

    return '\u001b[' + colorCode + 'm' + msg + '\u001b[0m'
}



