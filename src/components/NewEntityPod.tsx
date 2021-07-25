import React from 'react'
import Lixeira from 'src/shared/Lixeira'
import { createUseStyles } from 'react-jss'
import SelectedEntityContext from 'src/components/contexts/SelectedEntityContext'
import { MdAdd } from 'react-icons/md'
import { Tabs } from 'pages'
import User from 'src/shared/User'

interface Props {
    selectedTab : keyof Tabs
}

const NewEntityPod : React.FC<Props> = (props) => {

    const styles = useStyles()

    const selectedTab = props.selectedTab

    function createNewLixeira(setSelected : (selected : Lixeira) => void) {
        const lixeira : Lixeira = {
            type : 'Feature',
            geometry : {
                type : 'Point',
                coordinates : [null, null]
            },
            properties : {
                admin : null,
                location : null,
                description : null,
                capacity : null,
                distanceBottom : null,
                distanceCover : null
            }
        }
        setSelected(lixeira)
    }

    function createNewUser(setSelected : (selected : User) => void) {
        const user = new User(undefined, '', '', '')
        setSelected(user)
    }

    function onClick(setSelected : (selected : Lixeira | User) => void) {
        if (selectedTab == 'lixeiras') {
            createNewLixeira(setSelected)
        }
        else if (selectedTab == 'users') {
            createNewUser(setSelected)
        }
    }

    return (
        <SelectedEntityContext.Consumer>
            {({selected, setSelected}) => (
                <div className={styles.container} onClick={() => onClick(setSelected)}>
                    <MdAdd color="lightgray" size={30}/>
                </div>
            )}
        </SelectedEntityContext.Consumer>
    )

}

export default NewEntityPod

const useStyles = createUseStyles({
    container : {
		overflow : 'hidden',
		display : 'flex',
		borderRadius : '0.85em',
		border : ['solid', 'lightgray', 1],
		margin : ['1em', '0.5em'],
        padding : '0.65em',
        justifyContent : 'center',
        alignItems : 'center'
	},
})