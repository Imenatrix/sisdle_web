export class Geometry {
    type = 'Point'
    coordinates : Array<number>

    constructor(coordinates : Array<number>) {
        this.coordinates = coordinates
    }
}

export class Properties {
    admin : string
    location : string
    description : string
    capacity : number
    distanceCover : number
    distanceBottom : number

    constructor(
        admin : string,
        location : string,
        description : string,
        capacity : number,
        distanceCover : number,
        distanceBottom : number
    ) {
        this.admin = admin
        this.location = location
        this.description = description
        this.capacity = capacity
        this.distanceCover = distanceCover
        this.distanceBottom = distanceBottom
    }
}

export default class Lixeira {
    type = 'Feature'
    _id? : string
    geometry : Geometry
    properties : Properties

    constructor(_id : string, geometry : Geometry, properties : Properties) {
        this._id = _id
        this.geometry = geometry
        this.properties = properties
    }
}