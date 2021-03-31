import React from 'react'
import Map from 'src/components/Map'
import SearchCard from 'src/components/SearchCard'
import EntityCard from 'src/components/EntityCard'

const App : React.FC = () => {

	return (
		<div>
			<Map/>
			<SearchCard/>
			<EntityCard/>
		</div>
	)

}

export default App