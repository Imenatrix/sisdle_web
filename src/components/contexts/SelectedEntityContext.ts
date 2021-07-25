import { createContext } from 'react'
import { Lixeira } from 'src/api/models/lixeira'
import { User } from 'src/api/models/user'

const SelectedEntityContext = createContext<{
    selected : Lixeira | User | undefined,
    setSelected : (selected : Lixeira | User | undefined) => void
}>({
    selected : undefined,
    setSelected : (selected : Lixeira | User | undefined) => {}
})

export default SelectedEntityContext