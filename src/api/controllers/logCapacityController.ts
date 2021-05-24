import express from 'express';
import Lixeira from '../models/lixeira';
import LogCapacity from '../models/logCapacity';

const router = express.Router();

router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
    try {
        const query = await (LogCapacity.find({}))
        return res.send(query);
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

export default router;