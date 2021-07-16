import mongoose from '../database';

export interface Admin {
    idName: string;
    displayName: string;
}

const AdminSchema = new mongoose.Schema({
    idName: {
        type: String,
        trim: true
    },
    displayName: {
        type: String,
        trim: true
    }
}).pre<Admin>('validate', async function (next) {
    this.idName = this.displayName.toLowerCase();
})

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);