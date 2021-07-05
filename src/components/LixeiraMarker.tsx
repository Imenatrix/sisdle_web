import React from 'react'
import { createUseStyles } from 'react-jss'
import { Marker } from 'react-map-gl'
import { Lixeira } from 'src/api/models/lixeira'
import Capacitometer from 'src/components/Capacitometer'
import SelectedEntityContext from 'src/components/contexts/SelectedEntityContext'

interface Props {
	lixeira : Lixeira
}

const LixeiraMarker : React.FC<Props> = (props) => {

	const lixeira = props.lixeira
	const styles = useStyles()

	return (
		<Marker longitude={lixeira.geometry.coordinates[0]} latitude={lixeira.geometry.coordinates[1]}>
			<SelectedEntityContext.Consumer>
			{({selected, setSelected}) => (
				<div onClick={() => setSelected(lixeira)}>
					<Capacitometer className={styles.capacitometer}/>
				</div>
			)}
			</SelectedEntityContext.Consumer>
		</Marker>
	)
}

export default LixeiraMarker

const useStyles = createUseStyles({
	capacitometer : {
		width : 30,
		height : 30,
		borderRadius : '50%',
		overflow : 'hidden',
		border : [2, 'solid', 'black']
	}
})