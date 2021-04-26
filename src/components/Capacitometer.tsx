import React from 'react'
import { createUseStyles, Styles } from 'react-jss'

const Capacitometer : React.FC = () => {

	const styles = useStyles({capacity : 75})
	
	return (
		<div className={styles.container}>
			<div className={styles.empty}/>
			<div className={styles.full}/>
		</div>
	)

}

export default Capacitometer

// TODO: generalizar sem precisar por o nome das classes
const useStyles = createUseStyles<'container' | 'empty' | 'full', {capacity : number}>({
	container : {
		display : 'flex',
		flexDirection : 'column',
		flex : 0.1,
	},
	empty : {
		flex : props => 100 - props.capacity,
		backgroundColor : 'white'
	},
	full : {
		flex : props => props.capacity,
		backgroundColor : 'green'
	}
})