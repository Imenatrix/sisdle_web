import React, { useState } from 'react'
import EntityList from 'src/components/EntityList'
import { createUseStyles } from 'react-jss'
import Lixeira from 'src/shared/Lixeira'
import MainCard from 'src/components/MainCard'
import SearchCardHeader from './SearchCardHeader'
import User from 'src/shared/User'
import UserList from 'src/components/UserList'
import { Tabs } from 'pages'

interface Props {
    lixeiras : Array<Lixeira>
	users : Array<User>
	selectedTab : keyof Tabs
	setSelectedTab : (value : any) => void
	tabs : {}
}

const SearchCard : React.FC<Props> = (props) => {

	const styles = useStyles()

    const lixeiras = props.lixeiras
	const users = props.users
	const selectedTab = props.selectedTab
	const setSelectedTab = props.setSelectedTab
	const tabs = props.tabs

	return (
		<MainCard>
			<div className={styles.content}>
				<SearchCardHeader selectedTab={selectedTab} onTabsSelect={setSelectedTab} tabs={tabs}/>
				{selectedTab == 'lixeiras' &&
					<EntityList selectedTab={selectedTab} lixeiras={lixeiras}/>
				}
				{selectedTab == 'users' &&
					<UserList selectedTab={selectedTab} users={users}/>
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