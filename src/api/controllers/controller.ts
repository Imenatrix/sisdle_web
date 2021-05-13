import express from 'express';
import Lixeira from '../models/lixeira';
import LogCapacity from '../models/logCapacity';
import Admin from '../models/admin';
import User from '../models/user';
import { parseLixeiraToPlainObject } from '../library/functions';

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
        const query = await (LogCapacity.find({}))
        return res.send(query);
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

//Admin

router.post('/admin', async (req, res) => {
    try {
        const admin = await Admin.create(req.body);
        return res.send({ admin });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/admin', async (req, res) => {
    try {
        const query = await Admin.find({})

        return res.send(query);
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

//Users

router.post('/user', async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/user', async (req, res) => {
    try {
        const query = await User.find({})

        return res.send(query);
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

export default app => app.use('/', router);