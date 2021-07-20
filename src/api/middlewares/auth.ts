import jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token_header = req.headers.auth;

    if (!token_header) return res.send({ error: 'Token ausente' });

    try {
        jwt.verify(token_header, 'coxinha');
        return next();
    } catch (err) {
        return res.send({ error: 'Token inválido' })
    }

}

export default auth;