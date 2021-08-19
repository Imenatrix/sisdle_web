import React from 'react'
import MainCard from './MainCard'
import { createUseStyles } from 'react-jss'
import { useState } from 'react'

const LoginCard : React.FC = () => {

	const styles = useStyles()

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)

	async function tryLogin() {
		const res = await fetch('/user/login', {
			method : 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body : JSON.stringify({
				login : login,
				password : password
			})
		})
		if (res.redirected) {
			window.location.href = res.url
		}
		else if(res.status >= 400) {
			setError(true)
		}
	}

	return (
		<MainCard>
			<div className={styles.content}>
				{error &&
					<p className={styles.error}>Usuário ou senha incorretos.</p>
				}
				<input className={styles.txt} value={login} onChange={e => setLogin(e.target.value)} placeholder="Login"/>
				<input className={styles.txt} value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha"/>
				<button className={styles.btn} onClick={tryLogin}>Entrar</button>
			</div>
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
	},
	error : {
		color : '#f02849',
		position : 'relative',
		top : 0
	}
})