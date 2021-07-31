import { createContext } from 'react'
import User from 'src/shared/User'

const UserContext = createContext(new User(undefined, '', '', undefined))
export default UserContext