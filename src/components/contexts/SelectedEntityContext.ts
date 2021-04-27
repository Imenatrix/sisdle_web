import { createContext } from 'react'
import { Lixeira } from 'src/api/models/lixeira'

const SelectedEntityContext = createContext<{
    selected : Lixeira | undefined,
    setSelected : (selected : Lixeira | undefined) => void
}>({
    selected : undefined,
    setSelected : (selected : Lixeira | undefined) => {}
})

export default SelectedEntityContext