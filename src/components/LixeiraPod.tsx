import React from 'react'
import Capacitometer from 'src/components/Capacitometer'
import { createUseStyles } from 'react-jss'
import { Lixeira } from 'src/api/models/lixeira'

interface Props {
    lixeira : Lixeira
}

const LixeiraPod : React.FC<Props> = (props) => {

	const styles = useStyles()

    const lixeira = props.lixeira

	return (
		<div className={styles.container}>
			<Capacitometer/>
			<div className={styles.txtContainer}>
				<div className={styles.txtLocation}>{lixeira.properties.location}</div>
				<div className={styles.txtDescription}>{lixeira.properties.description}</div>
			</div>
		</div>
	)

}

export default LixeiraPod

const useStyles = createUseStyles({
	container : {
		overflow : 'hidden',
		display : 'flex',
		borderRadius : '0.85em',
		border : ['solid', 'lightgray', 1],
		margin : ['1em', 0]
	},
	txtContainer : {
		flex : 1,
		padding : '0.5em'
	},
    txtLocation : {

    },
    txtDescription : {
        marginTop : '0.5em',
        fontSize : 10
    }
})