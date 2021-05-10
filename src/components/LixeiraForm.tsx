import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Lixeira } from 'src/api/models/lixeira'

interface Props {
	lixeira : Lixeira,
    setSavePressed : () => void
    savePressed : boolean
}

const LixeiraForm : React.FC<Props> = (props) => {
	
	const styles = useStyles()

	const [location, setLocation] = useState(props.lixeira.properties.location)
	const [capacity, setCapacity] = useState(props.lixeira.properties.capacity)
	const [latitude, setLatitude] = useState(props.lixeira.geometry.coordinates[1])
	const [longitude, setLongitude] = useState(props.lixeira.geometry.coordinates[0])
	const [description, setDescription] = useState(props.lixeira.properties.description)
	const [distanceCover, setDistanceCover] = useState(props.lixeira.properties.distanceCover)
	const [distanceBottom, setDistanceBottom] = useState(props.lixeira.properties.distanceBottom)

	useEffect(() => {
		setLocation(props.lixeira.properties.location)
		setCapacity(props.lixeira.properties.capacity)
		setLatitude(props.lixeira.geometry.coordinates[1])
		setLongitude(props.lixeira.geometry.coordinates[0])
		setDescription(props.lixeira.properties.description)
		setDistanceCover(props.lixeira.properties.distanceCover)
		setDistanceBottom(props.lixeira.properties.distanceBottom)
	}, [props.lixeira])

    useEffect(() => {
        if (props.savePressed) {
            const lixeira : Lixeira = {
                _id : props.lixeira._id,
                type : 'Feature',
                geometry : {
                    type : 'Point',
                    coordinates : [longitude, latitude]
                },
                properties : {
                    location : location,
                    description : description,
                    capacity : capacity,
                    distanceBottom : distanceBottom,
                    distanceCover : distanceCover
                }
            }
            
            const coiso = async () => {
                if (props.lixeira._id == undefined) {
                    const res = await fetch('/lixeira', {
                        method : 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body : JSON.stringify(lixeira)
                    })
                }
                else {
                    const res = await fetch('/lixeira', {
                        method : 'PATCH',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body : JSON.stringify({id : lixeira._id, _id : undefined, ...lixeira})
                    })
                }
            }

            coiso()

            props.setSavePressed()
        } 
    }, [props.savePressed])
	
	return (
		<div className={styles.container}>
			<label className={styles.lbl} htmlFor="location">Location:</label>
			<input value={location} onChange={(event) => setLocation(event.target.value)} className={styles.txt} type="text" id="location"/>

			<label className={styles.lbl} htmlFor="capacity">Capacity:</label>
			<input value={capacity} onChange={(event) => setCapacity(event.target.valueAsNumber)} className={styles.txt} type="number" id="capacity"/>

			<div className={styles.hbox}>
				<div className={styles.vbox}>
					<label className={styles.lbl} htmlFor="longitude">Longitude:</label>
					<input value={longitude} onChange={(event) => setLongitude(event.target.valueAsNumber)} className={styles.txt} type="number" id="longitude"/>
				</div>

				<div className={styles.spacer}/>

				<div className={styles.vbox}>
					<label className={styles.lbl} htmlFor="latitude">Latitude:</label>
					<input value={latitude} onChange={(event) => setLatitude(event.target.valueAsNumber)} className={styles.txt} type="number" id="latitude"/>
				</div>
			</div>

			<label className={styles.lbl} htmlFor="description">Description:</label>
			<textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={0} cols={0} className={styles.txa} id="description"/>

			<div className={styles.hbox}>
				<div className={styles.vbox}>
					<label className={styles.lbl} htmlFor="distanceCover">Distance to cover:</label>
					<input value={distanceCover} onChange={(event) => setDistanceCover(event.target.valueAsNumber)} className={styles.txt} type="number" id="distanceCover"/>
				</div>

				<div className={styles.spacer}/>

				<div className={styles.vbox}>
					<label className={styles.lbl} htmlFor="distanceBottom">Distance to bottom:</label>
					<input value={distanceBottom} onChange={(event) => setDistanceBottom(event.target.valueAsNumber)} className={styles.txt} type="number" id="distanceBottom"/>
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