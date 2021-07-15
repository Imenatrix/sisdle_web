import mongoose from '../database';

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    }
});

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);