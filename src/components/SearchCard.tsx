import React from 'react'
import Tabs from 'src/components/Tabs'
import SearchBar from 'src/components/SearchBar'
import EntityList from 'src/components/EntityList'
import { createUseStyles } from 'react-jss'
import { Lixeira } from 'src/api/models/lixeira'
import MainCard from 'src/components/MainCard'

interface Props {
    lixeiras : Array<Lixeira>
}

const SearchCard : React.FC<Props> = (props) => {

    const lixeiras = props.lixeiras

	return (
		<MainCard>
			<Tabs/>
			<SearchBar/>
			<EntityList lixeiras={lixeiras}/>
		</MainCard>
	)

}

export default SearchCard

const useStyles = createUseStyles({
	container : {
		display : 'flex',
		flex : 0.333,
		backgroundColor : 'white',
		boxShadow : [1, 0, 7, 'rgba(0, 0, 0, 0.3)'],
		zIndex : 1,
		borderTopRightRadius : '0.85em',
		borderBottomRightRadius : '0.85em',
	},
	content  : {
		flex : 1,
		padding : '1em',
        display : 'flex',
        flexDirection : 'column'
	}
})