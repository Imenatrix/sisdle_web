const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextapp = next({ dev })
const handle = nextapp.getRequestHandler()

nextapp.prepare().then(() => {
    const app = express()

    require('src/api/controllers/controller')(app);

    app.listen(port, (err) => {
        if (err) throw err
        console.log(`> Servidor iniciado em: http://localhost:${port}`)
    })
})