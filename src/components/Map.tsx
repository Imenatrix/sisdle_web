import React, { useState } from 'react'
import { useEffect } from 'react'
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl'
import { Lixeira } from 'src/api/models/lixeira'
import LixeiraMarker from 'src/components/LixeiraMarker'

interface Props {
	lixeiras : Array<Lixeira>
	center? : Array<number>
}

const Map : React.FC<Props> = (props) => {

	const lixeiras = props.lixeiras
	const center = props.center || [0, 0]

	const [viewport, setViewport] = useState({
		longitude: center[0],
		latitude: center[1],
		zoom: 8
	})

	useEffect(() => {
		if (center != undefined) {
			const newViewport = {
				longitude: center[0],
				latitude: center[1],
				zoom: 14,
				transitionDuration: 1000,
				transitionInterpolator: new FlyToInterpolator(),
			}
			setViewport(newViewport)
		}
	}, [props.center])

	const markers = React.useMemo(() => lixeiras.map((lixeira) => (
		<LixeiraMarker key={lixeira._id} lixeira={lixeira}/>
	)), [props.lixeiras]);

	return (
		<ReactMapGL
			{...viewport}
			width="100%"
			height="100%"
			mapStyle="mapbox://styles/mapbox/streets-v11"
			onViewportChange={(viewport) => setViewport(viewport)}
			mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}>
				{markers}
			</ReactMapGL>
	)

}

export default Map