import React from 'react'
import { createUseStyles } from 'react-jss'

const LixeiraForm : React.FC = () => {

	const styles = useStyles()
	
	return (
		<form className={styles.container}>
			<label className={styles.lbl} htmlFor="location">Location:</label>
			<input className={styles.txt} type="text" id="location"/>
		</form>
	)

}

export default LixeiraForm

const useStyles = createUseStyles({
	container : {
		display : 'flex',
		flexDirection : 'column'
	},
	lbl : {

	},
	txt : {
		marginTop : '0.5em',
		padding : '0.5em',
		border : ['solid', 'lightgray', 1],
		borderRadius : 5
	}
})