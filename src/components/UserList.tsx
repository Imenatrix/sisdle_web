import React from 'react'
import UserPod from 'src/components/UserPod'
import { User } from 'src/api/models/user'
import { createUseStyles } from 'react-jss'
import NewEntityPod from './NewEntityPod'

interface Props {
    users : Array<User>
}

const EntityList : React.FC<Props> = (props) => {

    const users = props.users

    const styles = useStyles()

	return (
		<div className={styles.container}>
            <NewEntityPod/>
            {users.map(user => (
                <UserPod key={user._id} user={user}/>
            ))}
		</div>
	)
}

export default EntityList

const useStyles = createUseStyles({
    container : {
        overflow : 'scroll',
        flex : 1,
        overflowX : 'hidden',
        '&::-webkit-scrollbar-thumb' : {
            background : 'lightgray'
        },
        '&::-webkit-scrollbar' : {
            width : 10
        },
    },
})