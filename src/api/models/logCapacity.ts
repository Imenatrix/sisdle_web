import mongoose from '../database';

const LogCapacitySchema = new mongoose.Schema({
     lixeira: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Lixeira',
        required: true
    }, 
    capacity: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.LogCapacity|| mongoose.model('LogCapacity', LogCapacitySchema);