import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import Lixeira from 'src/shared/Lixeira'
import LixeirasContext from './contexts/LixeirasContext'
import UserContext from './contexts/UserContext'

interface Props {
	lixeira : Lixeira,
    setSavePressed : () => void
    savePressed : boolean
}

const LixeiraForm : React.FC<Props> = (props) => {
	
	const styles = useStyles()
	const user = useContext(UserContext)
	const {lixeiras, setLixeiras} = useContext(LixeirasContext)

	const lixeira = props.lixeira || {
		type : 'Feature',
		properties : {
			admin : '',
			location : '',
			capacity : 0,
			description : '',
			distanceCover : 0,
			distanceBottom : 0
		},
		geometry : {
			type : 'Point',
			coordinates : [0, 0]
		}
	}

	const admin = user.admin
	const [location, setLocation] = useState(lixeira.properties.location)
	const [capacity, setCapacity] = useState(lixeira.properties.capacity)
	const [latitude, setLatitude] = useState(lixeira.geometry.coordinates[1])
	const [longitude, setLongitude] = useState(lixeira.geometry.coordinates[0])
	const [description, setDescription] = useState(lixeira.properties.description)
	const [distanceCover, setDistanceCover] = useState(lixeira.properties.distanceCover)
	const [distanceBottom, setDistanceBottom] = useState(lixeira.properties.distanceBottom)

	useEffect(() => {
		setLocation(lixeira.properties.location)
		setCapacity(lixeira.properties.capacity)
		setLatitude(lixeira.geometry.coordinates[1])
		setLongitude(lixeira.geometry.coordinates[0])
		setDescription(lixeira.properties.description)
		setDistanceCover(lixeira.properties.distanceCover)
		setDistanceBottom(lixeira.properties.distanceBottom)
	}, [props.lixeira])

    useEffect(() => {
        if (props.savePressed) {
            const newLixeira : Lixeira = {
                _id : lixeira._id,
                type : 'Feature',
                geometry : {
                    type : 'Point',
                    coordinates : [longitude, latitude]
                },
                properties : {
					admin : admin,
                    location : location,
                    description : description,
                    capacity : capacity,
                    distanceBottom : distanceBottom,
                    distanceCover : distanceCover
                }
            }
            
            const checkLixeiraExistenceAndMakeAsyncRequest = async () => {
				let res : Response
                if (newLixeira._id == undefined) {
                    res = await fetch('/lixeira', {
                        method : 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body : JSON.stringify(newLixeira)
                    })
                }
                else {
                    res = await fetch('/lixeira', {
                        method : 'PATCH',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body : JSON.stringify({id : newLixeira._id, _id : undefined, ...newLixeira})
                    })
                }
				if (res.status >= 400) {

				}
				else {
					const responseLixeira : Lixeira = await res.json()
					setLixeiras([responseLixeira, ...lixeiras.filter(lixeira => lixeira._id != responseLixeira._id)])
				}
            }

            checkLixeiraExistenceAndMakeAsyncRequest()

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