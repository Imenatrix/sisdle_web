import mongoose from 'mongoose';
import { coloredMessage, colorCodes } from '../library/functions';

mongoose.connect('mongodb+srv://dbUser:' + process.env.MONGODB_PASSWORD + '@sisdlecluster.e1e0p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).catch(error => console.log(coloredMessage("\nFalha ao conectar-se com o banco de dados\n" + error + "\n", colorCodes.Red)));

//Verifica erros que acontecerem após a conexão incial
mongoose.connection.on('error', error => {
    console.log(coloredMessage("\nAparentemente mongoose não está funcionando.\n" + error + "\n", colorCodes.Red));
});

export default mongoose;