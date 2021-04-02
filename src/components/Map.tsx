import React from 'react'
import { createUseStyles } from 'react-jss'

const Map : React.FC = () => {

	const styles = useStyles()

	return (
		<div className={styles.container}>
			{
				// aqui vai o mapa (leaflet, Mapbox GL JS, etc)
			}
		</div>
	)

}

export default Map

const useStyles = createUseStyles({
	container : {
		backgroundColor : 'blue',
		flex : 1
	}
})