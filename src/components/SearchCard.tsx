import React, { useState } from 'react'
import EntityList from 'src/components/EntityList'
import { createUseStyles } from 'react-jss'
import { Lixeira } from 'src/api/models/lixeira'
import MainCard from 'src/components/MainCard'
import SearchCardHeader from './SearchCardHeader'

interface Props {
    lixeiras : Array<Lixeira>
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

	const [selectedTab, setSelectedTab] = useState<keyof Tabs>(tabs.lixeiras)

	const styles = useStyles()

    const lixeiras = props.lixeiras

	return (
		<MainCard>
			<div className={styles.content}>
				<SearchCardHeader selectedTab={selectedTab} onTabsSelect={setSelectedTab} tabs={tabs}/>
				<EntityList lixeiras={lixeiras}/>
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