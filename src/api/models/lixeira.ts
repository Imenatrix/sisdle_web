import mongoose from '../database';

const LixeiraSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Feature'],
        required: true,
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        //long e lat
        coordinates: [Number]
    },
    properties: {
        admin : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Admin'
        },
        location: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        capacity: {
            type: Number,
            required: true,
        },
        distanceCover: {
            type: Number,
            required: true,
        },
        distanceBottom: {
            type: Number,
            required: true,
        }
    }
});

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

export class Lixeira {
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

export default mongoose.models.Lixeira || mongoose.model('Lixeira', LixeiraSchema);