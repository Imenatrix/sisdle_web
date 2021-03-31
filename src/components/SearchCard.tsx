import React from 'react'
import Tabs from 'src/components/Tabs'
import SearchBar from 'src/components/SearchBar'
import EntityList from 'src/components/EntityList'

const SearchCard : React.FC = () => {

	return (
	   <div>
		   <Tabs/>
		   <SearchBar/>
		   <EntityList/>
	   </div> 
	)

}

export default SearchCard