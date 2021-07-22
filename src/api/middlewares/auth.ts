import jwt from 'express-jwt'

const auth = (req, res, next) => {
    return jwt({
        secret : process.env.JWT_SECRETKEY,
        getToken : req => req.cookies['auth_token'],
        algorithms: ['HS256']
    })(req, res, next)
}

export default auth;