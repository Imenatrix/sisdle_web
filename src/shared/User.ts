export default class User {
    _id : string
    login: string
    password: string
    name: string
    admin : string

    constructor (_id : string, admin : string, login : string, password : string) {
        this._id = _id
        this.admin = admin
        this.login = login
        this.password = password
    }
}