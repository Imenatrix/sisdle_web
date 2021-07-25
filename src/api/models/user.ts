import mongoose from '../database';
import bcrypt from 'bcrypt';


export class User {
    _id : string
    login: string
    password: string
    name: string

    constructor (_id : string, login : string) {
        this._id = _id
        this.login = login
    }
}

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    }
})
    .pre<User>('save', async function (next) {
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next();
    });

export default mongoose.models.User || mongoose.model('User', UserSchema);