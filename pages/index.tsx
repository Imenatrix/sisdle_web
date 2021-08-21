import React, { useState } from 'react'
import Map from 'src/components/Map'
import SearchCard from 'src/components/SearchCard'
import EntityCard from 'src/components/EntityCard'
import { createUseStyles } from 'react-jss'
import LixeiraModel from 'src/api/models/lixeira'
import Lixeira from 'src/shared/Lixeira'
import { GetServerSideProps } from 'next'
import SelectedEntityContext from 'src/components/contexts/SelectedEntityContext'
import UserModel from 'src/api/models/user'
import User from 'src/shared/User'
import UserContext from 'src/components/contexts/UserContext'
import LixeirasContext from 'src/components/contexts/LixeirasContext'
import UsersContext from 'src/components/contexts/UsersContext'

interface Props {
    lixeiras : Array<Lixeira>,
	users : Array<User>
	user : User
}

export interface Tabs {
	lixeiras,
	users,
	routes
}

const tabs : Tabs = {
	lixeiras : 'Lixeiras',
	users : 'Usuarios',
	routes  : 'Rotas'
}

const App : React.FC<Props> = (props) => {

	const styles = useStyles()
	const user = props.user
	
	const [users, setUsers] = useState(props.users)
    const [lixeiras, setLixeiras] = useState(props.lixeiras)
    const [selectedEntity, setSelectedEntity] = useState<Lixeira | User>()
	const [selectedTab, setSelectedTab] = useState<keyof Tabs>('lixeiras')

	function onTabSelected(tab : keyof Tabs) {
		setSelectedTab(tab)
		setSelectedEntity(undefined)
	}

	return (
        <SelectedEntityContext.Provider value={{selected : selectedEntity, setSelected : (selected) => setSelectedEntity(selected)}}>
		<UserContext.Provider value={user}>
		<LixeirasContext.Provider value={{lixeiras : lixeiras, setLixeiras : setLixeiras}}>
		<UsersContext.Provider value={{users : users, setUsers : setUsers}}>

		<div className={styles.container}>
			<div className={styles.mapContainer}>
				<Map lixeiras={lixeiras} center={selectedTab == 'lixeiras' && (selectedEntity as Lixeira)?.geometry.coordinates}/>
			</div>
			<div className={styles.foreground}>
				<div className={styles.searchCardContainer}>
					<SearchCard selectedTab={selectedTab} setSelectedTab={onTabSelected} tabs={tabs} users={users} lixeiras={lixeiras}/>
				</div>
				<div className={styles.entityCardContainer  + ' ' + (selectedEntity == undefined && styles.hidden)}>
					<EntityCard selectedTab={selectedTab}/>
				</div>
			</div>
		</div>

		</UsersContext.Provider>
		</LixeirasContext.Provider>
		</UserContext.Provider>
        </SelectedEntityContext.Provider>
	)

}

export default App

export const getServerSideProps : GetServerSideProps = async (ctx) => {
	const user = (ctx.req as any).user
    const lixeiras = await LixeiraModel.find({'properties.admin' : user.admin})
	const users = await UserModel.find({admin : user.admin})
    return {
        props : {
			user : user,
            lixeiras : JSON.parse(JSON.stringify(lixeiras)),
			users : JSON.parse(JSON.stringify(users))
        }
    }
}

const useStyles = createUseStyles({
	'@global body' : {
		margin : 0,
		fontFamily : 'sans-serif'
	},
	container : {
		display : 'flex',
		width : '100vw',
		height : '100vh',
		overflow : 'hidden'
	},
	foreground : {
		display : 'flex',
		position : 'absolute',
		width : '100%',
		height : '100%',
		pointerEvents : 'none',
		'& *' : {
			pointerEvents : 'auto'
		}		
	},
	mapContainer : {
		width : '100%',
		height : '100%',
		transform : 'translate(calc(33.333% - 0.85em * 2))'
	},
	searchCardContainer : {
		flex : 0.333,
		display : 'flex',
		'& > *' : {
			flex : 1
		}
	},
	entityCardContainer : {
		flex : 0.333,
		display : 'flex',
		margin : ['1em', 0],
		transform : 'translate(0)',
		transition : ['transform', '0.7s', 'cubic-bezier(0.2, 1, 0.2, 1)'],
		'& > *' : {
			flex : 1
		}
	},
	hidden : {
		transform : 'translate(-100%)',
	}
})