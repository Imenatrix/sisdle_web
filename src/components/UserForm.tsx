import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import User from 'src/shared/User'
import UserContext from './contexts/UserContext'
import UsersContext from './contexts/UsersContext'

interface Props {
	user : User,
    setSavePressed : () => void
    savePressed : boolean
}

const UserForm : React.FC<Props> = (props) => {
	
	const styles = useStyles()
    const loggedInUser = useContext(UserContext)
    const {users, setUsers} = useContext(UsersContext)

	const user = props.user || {
		_id : undefined,
		name : '',
        login : '',
        password : '',
        admin : ''
	}

    const admin = loggedInUser.admin
	const [name, setName] = useState(user.name)
    const [login, setLogin] = useState(user.login)
    const [password, setPassword] = useState(user.password)
    const [confirmPassword, setConfirmPassword] = useState('')
 
	useEffect(() => {
        setName(user.name)
        setLogin(user.login)
        setPassword(user.password)
        setConfirmPassword('')
	}, [props.user])

    useEffect(() => {
        if (props.savePressed) {
            const newUser = new User(user._id, admin, login, password)
            
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
                    if (res.status >= 400) {

                    }
                    else {
                        const responseUser : User = await res.json()
                        setUsers([responseUser, ...users.filter(user => user._id != responseUser._id)])
                    }
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

            {user._id == undefined && <>
                <label className={styles.lbl} htmlFor="password">Password:</label>
                <input value={password} onChange={(event) => setPassword(event.target.value)} className={styles.txt} type="password" id="password"/>

                <label className={styles.lbl} htmlFor="password">Confirm the password:</label>
                <input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className={styles.txt} type="password" id="name"/>
            </> }
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