import express from 'express';
import Admin from '../models/admin';

const router = express.Router();

router.post('/', async (req, res) => {
    const name = req.body;
    if (!name) return res.status(400).send({ error: 'Dados Insuficientes' })

    try {
        const admin = await Admin.create(req.body);
        return res.send({ admin });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/', async (req, res) => {
    try {
        const query = await Admin.find({})

        return res.send(query);
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

export default router;