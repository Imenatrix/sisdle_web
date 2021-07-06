import React from 'react'
import { createUseStyles } from 'react-jss'

interface Props {
	className? : string
	capacity : number
}

const Capacitometer : React.FC<Props> = (props) => {

	const capacity = props.capacity

	const styles = useStyles({capacity : capacity})
	
	return (
		<div className={styles.container + ' ' + props.className}>
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
		flexDirection : 'column'
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