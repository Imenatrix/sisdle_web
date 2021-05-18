import express from 'express';
import next from 'next';
import admin from './src/api/controllers/admin';
import lixeira from './src/api/controllers/lixeira';
import logCapacity from './src/api/controllers/logCapacity';
import user from './src/api/controllers/user';


const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextapp = next({ dev })
const handle = nextapp.getRequestHandler()

nextapp.prepare().then(() => {
    const app = express()
    app.use(express.json())

    admin(app);
    lixeira(app);
    logCapacity(app);
    user(app);

    app.all('*', (req, res) => {
        return handle(req, res)
    })

    app.listen(port, (err) => {
        if (err) throw err
        console.log(`> Servidor iniciado em: http://localhost:${port}`)
    })
})