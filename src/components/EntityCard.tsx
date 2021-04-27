import React from 'react'
import EditButton from 'src/components/EditButton'
import { createUseStyles } from 'react-jss'
import LixeiraForm from 'src/components/LixeiraForm'
import SelectedEntityContext from 'src/components/contexts/SelectedEntityContext'

const EntityCard : React.FC = () => {

	const styles = useStyles()

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<EditButton className={styles.btnEdit}/>
			</div>
            <SelectedEntityContext.Consumer>
                {({selected, setSelected}) => selected != undefined && (
                    <LixeiraForm lixeira={selected}/>
                )}
            </SelectedEntityContext.Consumer>
		</div>
	)

}

export default EntityCard

const useStyles = createUseStyles({
	container : {
		backgroundColor : 'white',
		flex : 0.333,
		margin : ['1em', 0],
		borderTopRightRadius : '0.85em',
		borderBottomRightRadius : '0.85em',
        padding : '1em',
        display : 'flex',
        flexDirection : 'column'
	},
	header : {
		display : 'flex',
		flexDirection : 'column',
	},
	btnEdit : {
		alignSelf : 'flex-end'
	}
})