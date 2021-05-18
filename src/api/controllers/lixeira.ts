import express from 'express';
import Lixeira from '../models/lixeira';
import { parseLixeiraToPlainObject } from '../library/functions';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const lixeira = await Lixeira.create(req.body);
        const id = lixeira._id;

        return res.send({ id });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/', async (req, res) => {
    try {
        const query = await Lixeira.find({})

        return res.send({
            type: 'FeatureCollection',
            features: parseLixeiraToPlainObject(query)
        });
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

router.patch('/', async (req, res) => {
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

export default app => app.use('/lixeira', router);