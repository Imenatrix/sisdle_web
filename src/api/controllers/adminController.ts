import express from 'express';
import Admin from '../models/admin';

const router = express.Router();

router.post('/', async (req, res) => {
    const { name } = req.body;

    //Verifica se a req possui os dados necessários
    if (!name) return res.status(400).send({ error: 'Dados Insuficientes' })

    try {
        //Verifica se já existe um admin com o mesmo nome
        if (await Admin.findOne({ name })) return res.send({ error: 'Nome ja registrado' })

        const admin = await Admin.create(req.body);
        return res.send(admin);
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao criar admin' });
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