import express from 'express';
import Lixeira from '../models/lixeira';

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
            features: lixeiras
        });
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

export default app => app.use('/', router);