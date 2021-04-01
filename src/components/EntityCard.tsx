import React from 'react'
import EditButton from 'src/components/EditButton'
import { createUseStyles } from 'react-jss'

const EntityCard : React.FC = () => {

	const styles = useStyles()

	return (
		<div className={styles.container}>
			<EditButton/>
		</div>
	)

}

export default EntityCard

const useStyles = createUseStyles({
	container : {
		backgroundColor : 'green',
		flex : 0.333,
		margin : ['1em', 0],
		borderTopRightRadius : '0.85em',
		borderBottomRightRadius : '0.85em'
	}
})