export default class User {
    _id : string
    login: string
    password: string
    name: string

    constructor (_id : string, login : string) {
        this._id = _id
        this.login = login
    }
}