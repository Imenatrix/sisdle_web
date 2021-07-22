import React from 'react'
import { createUseStyles } from 'react-jss'
import { Marker } from 'react-map-gl'
import { Lixeira } from 'src/api/models/lixeira'
import Capacitometer from 'src/components/Capacitometer'
import SelectedEntityContext from 'src/components/contexts/SelectedEntityContext'

interface Props {
	lixeira : Lixeira
	onMouseEnter? : (lixeira : Lixeira) => void
	onMouseLeave? : (lixeira : Lixeira) => void
}

const LixeiraMarker : React.FC<Props> = (props) => {

	const lixeira = props.lixeira
	const styles = useStyles()
	const onMouseEnter = props.onMouseEnter
	const onMouseLeave = props.onMouseLeave

	return (
		<Marker offsetLeft={-15} offsetTop={-15} longitude={lixeira.geometry.coordinates[0]} latitude={lixeira.geometry.coordinates[1]}>
			<SelectedEntityContext.Consumer>
			{({selected, setSelected}) => (
				<div onMouseEnter={() => onMouseEnter(lixeira)} onMouseLeave={() => onMouseLeave(lixeira)} onClick={() => setSelected(lixeira)}>
					<Capacitometer capacity={lixeira.properties.capacity} className={styles.capacitometer}/>
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