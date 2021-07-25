import React from 'react'
import { createUseStyles } from 'react-jss'
import User from 'src/shared/User'
import SelectedEntityContext from 'src/components/contexts/SelectedEntityContext'

interface Props {
    user : User
}

const LixeiraPod : React.FC<Props> = (props) => {

	const styles = useStyles()

    const user = props.user

	return (
        <SelectedEntityContext.Consumer>
            {({selected, setSelected}) => (
                <div className={styles.container} onClick={() => setSelected(user)}>
                    <div className={styles.txtContainer}>
                        <div className={styles.txtName}>{user.name}</div>
                        <div className={styles.txtLogin}>{user.login}</div>
                    </div>
                </div>
            )}
        </SelectedEntityContext.Consumer>
	)

}

export default LixeiraPod

const useStyles = createUseStyles({
	container : {
		overflow : 'hidden',
		display : 'flex',
		borderRadius : '0.85em',
		border : ['solid', 'lightgray', 1],
		margin : ['1em', '0.5em']
	},
	txtContainer : {
		flex : 1,
		padding : '0.5em',
        borderLeft : ['solid', 'lightgray', 1]
	},
    txtName : {

    },
    txtLogin : {
        marginTop : '0.5em',
        fontSize : 10
    }
})