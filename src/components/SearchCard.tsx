import React from 'react'
import Tabs from 'src/components/Tabs'
import SearchBar from 'src/components/SearchBar'
import EntityList from 'src/components/EntityList'
import { createUseStyles } from 'react-jss'

const SearchCard : React.FC = () => {

	const styles = useStyles()

	return (
	   <div className={styles.container}>
		   <Tabs/>
		   <SearchBar/>
		   <EntityList/>
	   </div> 
	)

}

export default SearchCard

const useStyles = createUseStyles({
	container : {
		flex : 0.333,
		backgroundColor : 'blue',
		borderTopRightRadius : '0.85em',
		borderBottomRightRadius : '0.85em',
		padding : '1em'
	}
})