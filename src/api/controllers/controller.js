const { json } = require('express');
const express = require('express');

const Lixeira = require('../models/lixeira');
const router = express.Router();

router.post('/lixeira', async (req, res) => {
    try {
        const lixeira = await Lixeira.create(req.body);
        const id = lixeira._id;

        return res.send({ id });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/lixeira', async (req, res) => {
    try {
        const lixeiras = await Lixeira.find({})


        return res.send({
            type: 'FeatureCollection',
            features: lixeiras.map
        });
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

module.exports = app => app.use('/', router);