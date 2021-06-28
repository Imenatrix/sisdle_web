import React from 'react'
import MainCard from './MainCard'

const LoginCard : React.FC = () => {
	return (
		<MainCard>

			<form action="/login" method="post">
				<input type="text" name="login" placeholder="Login"/> <br/>
				<input type="password" name="password" placeholder="Senha"/> <br/>
				<button type="submit">Entrar</button>
			</form>
		</MainCard>
	)
}

export default LoginCard