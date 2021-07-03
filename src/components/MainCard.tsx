import React from 'react'
import { createUseStyles } from 'react-jss'

const MainCard : React.FC = (props) => {

	const styles = useStyles()

	return (
	   <div className={styles.container}>
			<div className={styles.content}>
				{props.children}
			</div>
	   </div> 
	)

}

export default MainCard

const useStyles = createUseStyles({
	container : {
		display : 'flex',
		backgroundColor : 'white',
		boxShadow : [1, 0, 7, 'rgba(0, 0, 0, 0.3)'],
		zIndex : 1,
		borderTopRightRadius : '0.85em',
		borderBottomRightRadius : '0.85em',
	},
	content  : {
		flex : 1,
		padding : '1em',
        display : 'flex',
        flexDirection : 'column'
	}
})