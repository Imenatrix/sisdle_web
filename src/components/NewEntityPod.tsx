import React from 'react'
import Lixeira from 'src/shared/Lixeira'
import { createUseStyles } from 'react-jss'
import SelectedEntityContext from 'src/components/contexts/SelectedEntityContext'
import { MdAdd } from 'react-icons/md'

const NewEntityPod : React.FC = () => {

    const styles = useStyles()

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

    return (
        <SelectedEntityContext.Consumer>
            {({selected, setSelected}) => (
                <div className={styles.container} onClick={() => createNewLixeira(setSelected)}>
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