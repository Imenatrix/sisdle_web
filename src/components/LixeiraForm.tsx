import React from 'react'
import { createUseStyles } from 'react-jss'

const LixeiraForm : React.FC = () => {
	
	const styles = useStyles()
	
	return (
		<div className={styles.container}>
			<label className={styles.lbl} htmlFor="location">Location:</label>
			<input className={styles.txt} type="text" id="location"/>

			<label className={styles.lbl} htmlFor="capacity">Capacity:</label>
			<input className={styles.txt} type="number" id="capacity"/>

			<div className={styles.hbox}>
				<div className={styles.vbox}>
					<label className={styles.lbl} htmlFor="longitude">Longitude:</label>
					<input className={styles.txt} type="number" id="longitude"/>
				</div>

				<div className={styles.spacer}/>

				<div className={styles.vbox}>
					<label className={styles.lbl} htmlFor="latitude">Latitude:</label>
					<input className={styles.txt} type="number" id="latitude"/>
				</div>
			</div>

			<label className={styles.lbl} htmlFor="description">Description:</label>
			<textarea rows={0} cols={0} className={styles.txa} id="description"/>

			<div className={styles.hbox}>
				<div className={styles.vbox}>
					<label className={styles.lbl} htmlFor="distanceCover">Distance to cover:</label>
					<input className={styles.txt} type="number" id="distanceCover"/>
				</div>

				<div className={styles.spacer}/>

				<div className={styles.vbox}>
					<label className={styles.lbl} htmlFor="distanceBottom">Distance to bottom:</label>
					<input className={styles.txt} type="number" id="distanceBottom"/>
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