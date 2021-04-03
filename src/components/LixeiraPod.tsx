import React from 'react'
import Capacitometer from 'src/components/Capacitometer'
import { createUseStyles } from 'react-jss'

const LixeiraPod : React.FC = () => {

	const styles = useStyles()

	return (
		<div className={styles.container}>
			<Capacitometer/>
			<div className={styles.txtContainer}>
				<div>Lorem, ipsum.</div>
				<div>Lorem ipsum dolor sit.</div>
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
		boxShadow: [0, 0, 10, 'rgba(0, 0, 0, 0.3)'],
		margin : ['1em', 0]
	},
	txtContainer : {
		flex : 1,
		padding : '0.5em'
	}
})