import React from 'react'
import MainCard from './MainCard'
import { createUseStyles } from 'react-jss'

const LoginCard : React.FC = () => {

	const styles = useStyles()

	return (
		<MainCard>
			<form className={styles.content} action="/user/login" method="post">
				<input className={styles.txt} type="text" name="login" placeholder="Login"/>
				<input className={styles.txt} type="password" name="password" placeholder="Senha"/>
				<button className={styles.btn} type="submit">Entrar</button>
			</form>
		</MainCard>
	)
}

export default LoginCard

const useStyles = createUseStyles({
	content : {
		display : 'flex',
		flex : 1,
		flexDirection : 'column',
		padding : '2em',
		justifyContent : 'center'
	},
	txt : {
		padding : '0.5em',
		border : ['solid', 'lightgray', 1],
		borderRadius : 5,
		marginBottom : '0.5em'
	},
	btn : {
        display : 'flex',
		border : 'none',
		padding : '0.5em',
		backgroundColor : '#2196F3',
		borderRadius : 5,
		justifyContent : 'center',
		color : 'white',
		'&:active' : {
			opacity : 0.9
		},
		'&:focus' : {
			outline : 'none'
		}
	}
})