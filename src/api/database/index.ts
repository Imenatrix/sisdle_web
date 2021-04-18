import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://dbUser:' + process.env.MONGODB_PASSWORD + '@sisdlecluster.e1e0p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

export default mongoose;