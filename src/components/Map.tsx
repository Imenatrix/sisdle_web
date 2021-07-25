import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import ReactMapGL, { FlyToInterpolator, Popup } from 'react-map-gl'
import Lixeira from 'src/shared/Lixeira'
import LixeiraMarker from 'src/components/LixeiraMarker'
import Callout from './Callout'
import SelectedEntityContext from './contexts/SelectedEntityContext'

interface Props {
	lixeiras : Array<Lixeira>
	center? : Array<number>
}

const Map : React.FC<Props> = (props) => {

	const lixeiras = props.lixeiras
	const center = props.center

	const map = useRef(null)

	const [showCallout, setShowCallout] = useState({})

	const [viewport, setViewport] = useState({
		longitude: center ? center[0] : 0,
		latitude: center ? center[1] : 0,
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

	useEffect(() => {
		console.log(showCallout)
	})

	function toggleCalloutTrue(lixeira : Lixeira) {
		setShowCallout({
			[lixeira._id] : true
		})
	}

	function toggleCalloutFalse(lixeira : Lixeira) {
		setShowCallout({
			[lixeira._id] : false
		})
	}

	const markers = React.useMemo(() => lixeiras.map((lixeira) => (
		<LixeiraMarker onMouseEnter={toggleCalloutTrue} onMouseLeave={toggleCalloutFalse} key={lixeira._id} lixeira={lixeira}/>
	)), [props.lixeiras]);

	const callouts = React.useMemo(() => lixeiras.map((lixeira) => (
		showCallout[lixeira._id] && <Callout key={lixeira._id} lixeira={lixeira}/>
	)), [props.lixeiras, showCallout]);

	return (
		<SelectedEntityContext.Consumer>
			{({selected, setSelected}) => (
				<ReactMapGL
					ref={map}
					{...viewport}
					width="100%"
					height="100%"
					onClick={() => setSelected(undefined)}
					mapStyle="mapbox://styles/mapbox/streets-v11"
					onViewportChange={(viewport) => setViewport(viewport)}
					mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}>
						{markers}
						{callouts}
					</ReactMapGL>
			)}
		</SelectedEntityContext.Consumer>
	)

}

export default Map