import express from 'express';
import next from 'next';
import { coloredMessage, colorCodes } from './src/api/library/functions';
import admin from './src/api/controllers/adminController';
import lixeira from './src/api/controllers/lixeiraController';
import logCapacity from './src/api/controllers/logCapacityController';
import user from './src/api/controllers/userController';
import cookieParser from 'cookie-parser';
import authOnly from './src/api/middlewares/authOnly';

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextapp = next({ dev })
const handle = nextapp.getRequestHandler()

nextapp.prepare().then(() => {
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cookieParser())

    app.use('/admin', admin);
    app.use('/lixeira', lixeira);
    app.use('/capacity', logCapacity);
    app.use('/user', user);

    app.all('*', authOnly(['/']), handle)

    app.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') res.status(401).cookie('from', req.originalUrl).redirect('/login');
    })

    app.listen(port, (err) => {
        if (err) throw err
        console.log(coloredMessage(`> Servidor iniciado em: http://localhost:${port}`, colorCodes.Green));
    })
})