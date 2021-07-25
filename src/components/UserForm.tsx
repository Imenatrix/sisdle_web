import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import User from 'src/shared/User'

interface Props {
	user : User,
    setSavePressed : () => void
    savePressed : boolean
}

const UserForm : React.FC<Props> = (props) => {
	
	const styles = useStyles()

	const user = props.user || {
		_id : '',
		name : '',
        login : '',
        password : '',
        admin : ''
	}

	const [name, setName] = useState(user.name)
    const [login, setLogin] = useState(user.login)
    const [admin, setAdmin] = useState(user.admin)
    const [password, setPassword] = useState(user.password)
    const [confirmPassword, setConfirmPassword] = useState('')
 
	useEffect(() => {
        setName(user.name)
        setLogin(user.login)
        setAdmin(user.admin)
        setPassword(user.password)
        setConfirmPassword('')
	}, [props.user])

    useEffect(() => {
        if (props.savePressed) {
            const newUser = new User(user._id, admin, login, password)
            console.log(newUser)
            
            const checkUserExistanceAndMakeAsyncRequest = async () => {
                if (newUser._id == undefined) {
                    const res = await fetch('/user/register', {
                        method : 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body : JSON.stringify(newUser)
                    })
                }
            }

            checkUserExistanceAndMakeAsyncRequest()

            props.setSavePressed()
        } 
    }, [props.savePressed])
	
	return (
		<div className={styles.container}>
			<label className={styles.lbl} htmlFor="name">Name:</label>
			<input value={name} onChange={(event) => setName(event.target.value)} className={styles.txt} type="text" id="name"/>

            <label className={styles.lbl} htmlFor="login">login:</label>
			<input value={login} onChange={(event) => setLogin(event.target.value)} className={styles.txt} type="text" id="login"/>

            <label className={styles.lbl} htmlFor="admin">Admin:</label>
			<input value={admin} onChange={(event) => setAdmin(event.target.value)} className={styles.txt} type="text" id="admin"/>

            <label className={styles.lbl} htmlFor="password">Password:</label>
			<input value={password} onChange={(event) => setPassword(event.target.value)} className={styles.txt} type="password" id="password"/>

            <label className={styles.lbl} htmlFor="password">Confirm the password:</label>
			<input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className={styles.txt} type="password" id="name"/>
		</div>
	)

}

export default UserForm

const useStyles = createUseStyles({
	container : {
		flex : 1,
		display : 'flex',
		flexDirection : 'column'
	},
	lbl : {

	},
	txt : {
		marginTop : '0.5em',
		marginBottom : '1.85em',
		padding : '0.5em',
		border : ['solid', 'lightgray', 1],
		borderRadius : 5
	}
})