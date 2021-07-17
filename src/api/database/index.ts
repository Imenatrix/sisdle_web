import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://dbUser:' + process.env.MONGODB_PASSWORD + '@sisdlecluster.e1e0p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).catch(error => console.log("\nFalha ao conectar-se com o banco de dados\n" + error + "\n"));

//Verifica erros que acontecerem após a conexão incial
mongoose.connection.on('error', error => {
    console.log("\nAparentemente mongoose não está funcionando.\n" + error + "\n");
});

export default mongoose;