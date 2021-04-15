const express = require('express');

const Lixeira = require('../models/lixeira');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const lixeira = await Lixeira.create(req.body);

        return res.send({ lixeira });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/lixeiras', async (req, res) => {
    try {
        const lixeiras = await Lixeira.find({});
        return res.send({
            type: 'FeatureCollection',
            features: lixeiras
        });
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

module.exports = app => app.use('/lixeira', router);