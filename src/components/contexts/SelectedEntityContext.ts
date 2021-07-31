import { createContext } from 'react'
import Lixeira from 'src/shared/Lixeira'
import User from 'src/shared/User'

const SelectedEntityContext = createContext<{
    selected : Lixeira | User | undefined,
    setSelected : (selected : Lixeira | User | undefined) => void
}>({
    selected : undefined,
    setSelected : (selected : Lixeira | User | undefined) => {}
})

export default SelectedEntityContext