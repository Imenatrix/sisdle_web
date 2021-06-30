import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

const Map : React.FC = () => {

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
			mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}/>
	)

}

export default Map