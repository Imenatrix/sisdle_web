import express from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt';
import auth from '../middlewares/auth';
import { createUserToken } from '../library/functions';

const router = express.Router();

router.post('/register', async (req, res) => {

    //Verifica se a req possui os dados necessários
    const { login, password, admin } = req.body;
    if (!login || !password || !admin) return res.status(400).send({ error: 'Dados Insuficientes' });

    try {
        //Verifica se ja existe um login com o mesmo login
        if (await User.findOne({ login })) return res.send({ error: 'Usuário já registado' });

        const user = await User.create(req.body);
        user.password = undefined;
        return res.cookie('auth_token', createUserToken(user.toJSON()), { httpOnly: true, sameSite: true }).send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao criar usuário' });
    }
});

router.post('/login', async (req, res) => {

    //Verifica se a req possui os dados necessários
    const { login, password } = req.body;
    if (!login || !password) return res.status(400).send({ error: 'Dados Insuficientes' });

    try {
        //Verifica se o login existe
        const user = await User.findOne({ login });
        if (!user) return res.status(401).send({ error: 'Usuário não registrado' });

        //Compara a senha enviada com a do banco de dados
        const result = await bcrypt.compare(password, user.password);
        if (!result) return res.status(401).send({ error: 'Senha incorreta' });
        user.password = undefined;

        const from = req.cookies['from'];
        res.clearCookie('from');

        return res.cookie('auth_token', createUserToken(user.toJSON()), { httpOnly: true, sameSite: true }).redirect(from || '/');

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Falha ao buscar usuário' });
    }

});

router.get('/', auth, async (req, res) => {
    try {
        const query = await User.find({})
        return res.send(query);
    }
    catch (err) {
        return res.status(500).send({ error: 'Query failed' });
    }
})

export default router;