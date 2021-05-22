import mongoose from '../database';

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Admin',
        required: true
    }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);