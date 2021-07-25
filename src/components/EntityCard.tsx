import React, { useState } from 'react'
import EditButton from 'src/components/EditButton'
import { createUseStyles } from 'react-jss'
import LixeiraForm from 'src/components/LixeiraForm'
import SelectedEntityContext from 'src/components/contexts/SelectedEntityContext'
import MainCard from './MainCard'
import Lixeira from 'src/shared/Lixeira'

const EntityCard : React.FC = () => {

	const styles = useStyles()

    const [savePressed, setSavePressed] = useState(false)

	return (
		<MainCard>
			<div className={styles.content}>
				<div className={styles.header}>
					<EditButton setSavePressed={() => setSavePressed(true)} className={styles.btnEdit}/>
				</div>
				<SelectedEntityContext.Consumer>
					{({selected, setSelected}) => (
						<LixeiraForm savePressed={savePressed} setSavePressed={() => setSavePressed(false)} lixeira={selected instanceof Lixeira && selected}/>
					)}
				</SelectedEntityContext.Consumer>
			</div>
		</MainCard>
	)

}

export default EntityCard

const useStyles = createUseStyles({
	content : {
		flex : 1,
		display : 'flex',
		flexDirection : 'column',
		padding : '1em'
	},
	header : {
		display : 'flex',
		flexDirection : 'column',
	},
	btnEdit : {
		alignSelf : 'flex-end'
	}
})