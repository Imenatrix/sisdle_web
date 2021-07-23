import auth from './auth'

function authOnly(urls : Array<string>) {
    return (req, res, next) => {
        if (urls.includes(req.url)) {
            return auth(req, res, next)
        }
        else {
            return next()
        }
    }
}

export default authOnly