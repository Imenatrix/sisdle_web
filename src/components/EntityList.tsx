import React from 'react'
import LixeiraPod from 'src/components/LixeiraPod'
import lixeira, { Lixeira } from 'src/api/models/lixeira'
import { createUseStyles } from 'react-jss'

interface Props {
    lixeiras : Array<Lixeira>
}

const EntityList : React.FC<Props> = (props) => {

    const lixeiras = props.lixeiras

    const styles = useStyles()

	return (
		<div className={styles.container}>
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
        flex : 1
    }
})