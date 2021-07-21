import jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (!bearerHeader) return res.send({ error: 'Token ausente' });

    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    try {
        res.locals.auth_data = jwt.verify(bearerToken, process.env.JWT_SECRETKEY);
        return next();
    } catch (err) {
        return res.send({ error: 'Token inválido' })
    }

}

export default auth;