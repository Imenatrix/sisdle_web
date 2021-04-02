import React from 'react'
import EditButton from 'src/components/EditButton'
import { createUseStyles } from 'react-jss'

const EntityCard : React.FC = () => {

	const styles = useStyles()

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<EditButton className={styles.btnEdit}/>
			</div>
		</div>
	)

}

export default EntityCard

const useStyles = createUseStyles({
	container : {
		backgroundColor : 'white',
		flex : 0.333,
		margin : ['1em', 0],
		borderTopRightRadius : '0.85em',
		borderBottomRightRadius : '0.85em'
	},
	header : {
		display : 'flex',
		flexDirection : 'column',
		padding : '1em'
	},
	btnEdit : {
		alignSelf : 'flex-end'
	}
})