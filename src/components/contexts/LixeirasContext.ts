import { createContext, Dispatch, SetStateAction } from "react"
import Lixeira from "src/shared/Lixeira"

const LixeirasContext = createContext<{
    lixeiras : Array<Lixeira>,
    setLixeiras : Dispatch<SetStateAction<Lixeira[]>>
}>({
    lixeiras : [],
    setLixeiras : () => {}
})

export default LixeirasContext