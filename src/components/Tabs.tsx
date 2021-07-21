import React from 'react'
import { createUseStyles } from 'react-jss'

const Tabs : React.FC = () => {

	const styles = useStyles()

	return (
		<nav className={styles.container}>
			<div className={styles.coiso + ' ' +  styles.selected}>Lixeiras</div>
			<div className={styles.coiso}>Usuarios</div>
			<div className={styles.coiso}>Rotas</div>
			<div className={styles.filler}></div>
		</nav>
	)

}

export default Tabs

const useStyles = createUseStyles({
	container : {
		display : 'flex',
	},
	coiso : {
		backgroundColor : 'white',
		padding : '0.5em',
		borderRight : ['solid', 1, 'lightgray'],
		borderBottom : ['solid', 1, 'lightgray']
	},
	selected : {
		borderBottom : 'none'
	},
	filler : {
		flex : 1,
		borderBottom : ['solid', 1, 'lightgray']
	}
})