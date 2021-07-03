import React, { useState } from 'react'
import EditButton from 'src/components/EditButton'
import { createUseStyles } from 'react-jss'
import LixeiraForm from 'src/components/LixeiraForm'
import SelectedEntityContext from 'src/components/contexts/SelectedEntityContext'
import MainCard from './MainCard'

interface Props {
	hidden? : boolean
}

const EntityCard : React.FC<Props> = (props) => {

	const styles = useStyles()

    const [savePressed, setSavePressed] = useState(false)

	return (
		<MainCard>
			<div className={styles.header}>
				<EditButton setSavePressed={() => setSavePressed(true)} className={styles.btnEdit}/>
			</div>
            <SelectedEntityContext.Consumer>
                {({selected, setSelected}) => selected != undefined && (
                    <LixeiraForm savePressed={savePressed} setSavePressed={() => setSavePressed(false)} lixeira={selected}/>
                )}
            </SelectedEntityContext.Consumer>
		</MainCard>
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
        flexDirection : 'column',
		transform : 'translate(0)',
		transition : ['transform', '0.7s', 'cubic-bezier(0.2, 1, 0.2, 1)'],
	},
	hidden : {
		transform : 'translate(-100%)',
	},
	header : {
		display : 'flex',
		flexDirection : 'column',
	},
	btnEdit : {
		alignSelf : 'flex-end'
	}
})