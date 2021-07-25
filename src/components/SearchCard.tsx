import React, { useState } from 'react'
import EntityList from 'src/components/EntityList'
import { createUseStyles } from 'react-jss'
import { Lixeira } from 'src/api/models/lixeira'
import MainCard from 'src/components/MainCard'
import SearchCardHeader from './SearchCardHeader'
import { User } from 'src/api/models/user'
import UserList from 'src/components/UserList'

interface Props {
    lixeiras : Array<Lixeira>
	users : Array<User>
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

const SearchCard : React.FC<Props> = (props) => {

	const [selectedTab, setSelectedTab] = useState<keyof Tabs>('lixeiras')

	const styles = useStyles()

    const lixeiras = props.lixeiras
	const users = props.users

	return (
		<MainCard>
			<div className={styles.content}>
				<SearchCardHeader selectedTab={selectedTab} onTabsSelect={setSelectedTab} tabs={tabs}/>
				{selectedTab == 'lixeiras' &&
					<EntityList lixeiras={lixeiras}/>
				}
				{selectedTab == 'users' &&
					<UserList users={users}/>
				}
			</div>
		</MainCard>
	)

}

export default SearchCard

const useStyles = createUseStyles({
	content : {
		flex : 1,
		display : 'flex',
		flexDirection : 'column'
	}
})