import express from 'express';
import User from '../models/user';

const router = express.Router();

router.post('/', async (req, res) => {

    const { login, password, admin } = req.body;
    if (!login || !password || !admin) return res.status(400).send({ error: 'Dados Insuficientes' });

    try {
        if (await User.findOne({ login })) return res.send({ error: 'Usuário já registado' });
        const user = await User.create(req.body);
        user.password = undefined;
        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao criar usuário' });
    }
});

router.get('/', async (req, res) => {
    try {
        const query = await User.find({})

        return res.send(query);
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

export default router;