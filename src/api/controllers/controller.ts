import express from 'express';
import Lixeira from '../models/lixeira';
import LogCapacity from '../models/logCapacity';
import { parseLixeiraToPlainObject } from '../library/functions';

const router = express.Router();

router.post('/lixeira', async (req, res) => {
    try {
        const lixeira = await Lixeira.create(req.body);
        const id = lixeira._id;

        return res.send({
            id, ...JSON.parse(JSON.stringify(lixeira)),
            _id: undefined,
            __v: undefined,

        });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.patch('/lixeira', async (req, res) => {
    try {
        const lixeira = await Lixeira.findByIdAndUpdate(req.body.id,
            {
                $set:
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [req.body.geometry.coordinates[0], req.body.geometry.coordinates[1]]
                    },
                    "properties": {
                        "location": req.body.properties.location,
                        "description": req.body.properties.description,
                        "capacity": req.body.properties.capacity,
                        "distanceCover": req.body.properties.distanceCover,
                        "distanceBottom": req.body.properties.distanceBottom
                    }
                }
            },
            {
                new: true,
                useFindAndModify: false
            }
        );
        const id = lixeira._id;

        return res.send({
            id, ...JSON.parse(JSON.stringify(lixeira)),
            _id: undefined,
            __v: undefined,

        });
    } catch (err) {
        return res.status(400).send({ error: 'Update failed' });
    }
});

router.get('/lixeira', async (req, res) => {
    try {
        const query = await (await Lixeira.find({}))

        return res.send({
            type: 'FeatureCollection',
            features: parseLixeiraToPlainObject(query)
        });
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

//LogCapacicy

router.post('/capacity', async (req, res) => {
    try {
        const log = await LogCapacity.create(req.body);
        const lixeira = await Lixeira.findById(log.lixeira);
        lixeira.properties.capacity = log.capacity;
        await lixeira.save();
        return res.send({ log });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/capacity', async (req, res) => {
    try {
        const query = await (await LogCapacity.find({}))
        return res.send(query);
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

export default app => app.use('/', router);