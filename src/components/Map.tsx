import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import { Lixeira } from 'src/api/models/lixeira'
import LixeiraMarker from 'src/components/LixeiraMarker'

interface Props {
	lixeiras : Array<Lixeira>
}

const Map : React.FC<Props> = (props) => {

	const lixeiras = props.lixeiras

	const [viewport, setViewport] = useState({
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 8
	})

	return (
		<ReactMapGL
			{...viewport}
			width="100%"
			height="100%"
			mapStyle="mapbox://styles/mapbox/streets-v11"
			onViewportChange={(viewport) => setViewport(viewport)}
			mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}>
				{lixeiras.map((lixeira) => (
					<LixeiraMarker key={lixeira._id} lixeira={lixeira}/>
				))}
			</ReactMapGL>
	)

}

export default Map