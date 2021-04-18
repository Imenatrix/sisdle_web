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

export interface Lixeira {
    type : 'Feature'
    geometry : {
        type : 'Point'
        coordinates : Array<number>
    },
    properties : {
        location : string
        description : string
        capacity : number
        distanceCover : number
        distanceBottom : number
    }
}

export default mongoose.models.Lixeira || mongoose.model('Lixeira', LixeiraSchema);