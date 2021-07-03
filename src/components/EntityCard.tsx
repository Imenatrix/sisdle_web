import React, { useState } from 'react'
import EditButton from 'src/components/EditButton'
import { createUseStyles } from 'react-jss'
import LixeiraForm from 'src/components/LixeiraForm'
import SelectedEntityContext from 'src/components/contexts/SelectedEntityContext'
import MainCard from './MainCard'

const EntityCard : React.FC = () => {

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
	header : {
		display : 'flex',
		flexDirection : 'column',
	},
	btnEdit : {
		alignSelf : 'flex-end'
	}
})