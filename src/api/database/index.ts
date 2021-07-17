import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://dbUser:' + process.env.MONGODB_PASSWORD + '@sisdlecluster.e1e0p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).catch(error => console.log('\u001b[' + 31 + 'm' + "\nFalha ao conectar-se com o banco de dados\n" + error + "\n" + '\u001b[0m'));

//Verifica erros que acontecerem após a conexão incial
mongoose.connection.on('error', error => {
    var msg = "\nAparentemente mongoose não está funcionando.\n" + error + "\n"
    console.log('\u001b[' + 31 + 'm' + msg + '\u001b[0m')
});

export default mongoose;