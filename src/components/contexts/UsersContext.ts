import { createContext, Dispatch, SetStateAction } from "react"
import User from "src/shared/User"

const UsersContext = createContext<{
    users : Array<User>,
    setUsers : Dispatch<SetStateAction<User[]>>
}>({
    users : [],
    setUsers : () => {}
})

export default UsersContext