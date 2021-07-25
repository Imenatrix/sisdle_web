import React from 'react'
import LixeiraPod from 'src/components/LixeiraPod'
import Lixeira from 'src/shared/Lixeira'
import { createUseStyles } from 'react-jss'
import NewEntityPod from './NewEntityPod'

interface Props {
    lixeiras : Array<Lixeira>
}

const EntityList : React.FC<Props> = (props) => {

    const lixeiras = props.lixeiras

    const styles = useStyles()

	return (
		<div className={styles.container}>
            <NewEntityPod/>
            {lixeiras.map(lixeira => (
                <LixeiraPod key={lixeira._id} lixeira={lixeira}/>
            ))}
		</div>
	)
}

export default EntityList

const useStyles = createUseStyles({
    container : {
        overflow : 'scroll',
        flex : 1,
        overflowX : 'hidden',
        '&::-webkit-scrollbar-thumb' : {
            background : 'lightgray'
        },
        '&::-webkit-scrollbar' : {
            width : 10
        },
    },
})