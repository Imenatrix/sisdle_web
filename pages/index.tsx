import React from 'react'
import Map from 'src/components/Map'
import SearchCard from 'src/components/SearchCard'
import EntityCard from 'src/components/EntityCard'
import { createUseStyles } from 'react-jss'

const App : React.FC = () => {

	const styles = useStyles()

	return (
		<div className={styles.container}>
			<Map/>
			<div className={styles.foreground}>
				<SearchCard/>
				<EntityCard/>
			</div>
		</div>
	)

}

export default App

const useStyles = createUseStyles({
	'@global body' : {
		margin : 0
	},
	'container' : {
		'display' : 'flex',
		'width' : '100vw',
		'height' : '100vh'
	},
	foreground : {
		display : 'flex',
		position : 'absolute',
		width : '100%',
		height : '100%'
	}
})