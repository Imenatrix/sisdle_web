import React from 'react'
import LoginCard from 'src/components/LoginCard'
import { createUseStyles } from 'react-jss'
import Map from 'src/components/Map'

const Login : React.FC = () => {

	const styles = useStyles()

	return (
		<div className={styles.container}>
			<Map lixeiras={[]}/>
			<div className={styles.foreground}>
				<LoginCard/>
			</div>
		</div>
	)
}

export default Login

const useStyles = createUseStyles({
	'@global body' : {
		margin : 0,
		fontFamily : 'sans-serif'
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