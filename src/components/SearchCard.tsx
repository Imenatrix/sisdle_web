import React from 'react'
import Tabs from 'src/components/Tabs'
import SearchBar from 'src/components/SearchBar'
import EntityList from 'src/components/EntityList'
import { createUseStyles } from 'react-jss'

const SearchCard : React.FC = () => {

	const styles = useStyles()

	return (
	   <div className={styles.container}>
			<div className={styles.content}>
				<Tabs/>
				<SearchBar/>
				<EntityList/>
			</div>
	   </div> 
	)

}

export default SearchCard

const useStyles = createUseStyles({
	container : {
		display : 'flex',
		flex : 0.333,
		backgroundColor : 'white',
		boxShadow : [7, 0, 10, 'rgba(0, 0, 0, 0.3)'],
		zIndex : 1,
		borderTopRightRadius : '0.85em',
		borderBottomRightRadius : '0.85em',
	},
	content  : {
		flex : 1,
		padding : '1em',
	}
})