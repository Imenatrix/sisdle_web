const express = require('express');

const Bin = require('../models/bin');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const bin = await Bin.create(req.body);

        return res.send({ bin });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/bins', async (req, res) => {
    try {
        const bins = await Bin.find({});
        return res.send({
            type: 'FeatureCollection',
            features: bins
        });
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

module.exports = app => app.use('/bin', router);