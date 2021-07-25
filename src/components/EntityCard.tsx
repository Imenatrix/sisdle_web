import React, { useState } from 'react'
import EditButton from 'src/components/EditButton'
import { createUseStyles } from 'react-jss'
import LixeiraForm from 'src/components/LixeiraForm'
import SelectedEntityContext from 'src/components/contexts/SelectedEntityContext'
import MainCard from './MainCard'
import Lixeira from 'src/shared/Lixeira'
import { Tabs } from 'pages'
import UserForm from 'src/components/UserForm'
import User from 'src/shared/User'

interface Props {
	selectedTab : keyof Tabs
}

const EntityCard : React.FC<Props> = (props) => {

	const styles = useStyles()

	const selectedTab = props.selectedTab

    const [savePressed, setSavePressed] = useState(false)

	return (
		<MainCard>
			<div className={styles.content}>
				<div className={styles.header}>
					<EditButton setSavePressed={() => setSavePressed(true)} className={styles.btnEdit}/>
				</div>
				<SelectedEntityContext.Consumer>
					{({selected, setSelected}) => (
						selectedTab == 'lixeiras' ?
							<LixeiraForm savePressed={savePressed} setSavePressed={() => setSavePressed(false)} lixeira={(selected as Lixeira)}/>
						: selectedTab == 'users' &&
							<UserForm savePressed={savePressed} setSavePressed={() => setSavePressed(false)} user={(selected as User)}/>
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