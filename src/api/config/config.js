const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
            return {
                bd_string: 'mongodb+srv://dbUser:' + password + '@sisdlecluster.e1e0p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            }

        case 'hml':
            return {
                bd_string: 'mongodb+srv://dbUser:' + password + '@sisdlecluster.e1e0p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            }

        case 'prod':
            return {
                bd_string: 'mongodb+srv://dbUser:' + password + '@sisdlecluster.e1e0p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();