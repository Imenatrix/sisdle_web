import React from 'react'
import EntityList from 'src/components/EntityList'
import { createUseStyles } from 'react-jss'
import { Lixeira } from 'src/api/models/lixeira'
import MainCard from 'src/components/MainCard'
import SearchCardHeader from './SearchCardHeader'

interface Props {
    lixeiras : Array<Lixeira>
}

const SearchCard : React.FC<Props> = (props) => {

	const styles = useStyles()

    const lixeiras = props.lixeiras

	return (
		<MainCard>
			<div className={styles.content}>
				<SearchCardHeader/>
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