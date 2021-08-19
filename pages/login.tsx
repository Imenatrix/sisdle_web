import React from 'react'
import LoginCard from 'src/components/LoginCard'
import { createUseStyles } from 'react-jss'
import Map from 'src/components/Map'

const Login : React.FC = () => {

	const styles = useStyles()

	return (
		<div className={styles.container}>
			<img src="imgs/login-background.jpg" alt="" width="100%" />
			<div className={styles.foreground}>
				<LoginCard/>
			</div>
		</div>
	)
}

export default Login

const useStyles = createUseStyles({
	'@global body' : {
		margin : 0
	},
	'container' : {
		'display' : 'flex',
		'width' : '100vw',
		'height' : '100vh'
	},
	foreground : {
		display : 'flex',
		position : 'absolute',
		width : '100%',
		height : '100%'
	}
})