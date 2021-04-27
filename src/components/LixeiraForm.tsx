import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Lixeira } from 'src/api/models/lixeira'

interface Props {
	lixeira : Lixeira
}

const LixeiraForm : React.FC<Props> = (props) => {
	
	const styles = useStyles()

	const [location, setLocation] = useState(props.lixeira.properties.location)
	const [capacity, setCapacity] = useState(props.lixeira.properties.capacity)
	const [longitude, setLongitude] = useState(props.lixeira.geometry.coordinates[0])
	const [latitude, setLatitude] = useState(props.lixeira.geometry.coordinates[1])
	const [description, setDescription] = useState(props.lixeira.properties.description)
	const [distanceCover, setDistanceCover] = useState(props.lixeira.properties.distanceCover)
	const [distanceBottom, setDistanceBottom] = useState(props.lixeira.properties.distanceBottom)

	useEffect(() => {
		setLocation(props.lixeira.properties.location)
		setCapacity(props.lixeira.properties.capacity)
		setLongitude(props.lixeira.geometry.coordinates[0])
		setLatitude(props.lixeira.geometry.coordinates[1])
		setDescription(props.lixeira.properties.description)
		setDistanceCover(props.lixeira.properties.distanceCover)
		setDistanceBottom(props.lixeira.properties.distanceBottom)
	}, [props.lixeira])
	
	return (
		<div className={styles.container}>
			<label className={styles.lbl} htmlFor="location">Location:</label>
			<input value={location} className={styles.txt} type="text" id="location"/>

			<label className={styles.lbl} htmlFor="capacity">Capacity:</label>
			<input value={capacity} className={styles.txt} type="number" id="capacity"/>

			<div className={styles.hbox}>
				<div className={styles.vbox}>
					<label className={styles.lbl} htmlFor="longitude">Longitude:</label>
					<input value={longitude} className={styles.txt} type="number" id="longitude"/>
				</div>

				<div className={styles.spacer}/>

				<div className={styles.vbox}>
					<label className={styles.lbl} htmlFor="latitude">Latitude:</label>
					<input value={latitude} className={styles.txt} type="number" id="latitude"/>
				</div>
			</div>

			<label className={styles.lbl} htmlFor="description">Description:</label>
			<textarea value={description} rows={0} cols={0} className={styles.txa} id="description"/>

			<div className={styles.hbox}>
				<div className={styles.vbox}>
					<label className={styles.lbl} htmlFor="distanceCover">Distance to cover:</label>
					<input value={distanceCover} className={styles.txt} type="number" id="distanceCover"/>
				</div>

				<div className={styles.spacer}/>

				<div className={styles.vbox}>
					<label className={styles.lbl} htmlFor="distanceBottom">Distance to bottom:</label>
					<input value={distanceBottom} className={styles.txt} type="number" id="distanceBottom"/>
				</div>
			</div>
		</div>
	)

}

export default LixeiraForm

const useStyles = createUseStyles({
	container : {
		flex : 1,
		display : 'flex',
		flexDirection : 'column'
	},
	vbox : {
		flex : 1,
		display : 'flex',
		flexDirection : 'column'
	},
	lbl : {

	},
	txt : {
		marginTop : '0.5em',
		marginBottom : '1.85em',
		padding : '0.5em',
		border : ['solid', 'lightgray', 1],
		borderRadius : 5
	},
	txa : {
		marginTop : '0.5em',
		marginBottom : '1.85em',
		padding : '0.5em',
		border : ['solid', 'lightgray', 1],
		borderRadius : 5,
		resize : 'none',
		flex : 1
	},
	hbox : {
		display : 'flex'
	},
	spacer : {
		width : '1em'
	}
})