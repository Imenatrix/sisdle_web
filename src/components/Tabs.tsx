import React from 'react'
import { createUseStyles } from 'react-jss'

interface Props {
	tabs : {}
	onSelect : (value : any) => void
	value : any
}

const Tabs : React.FC<Props> = (props) => {

	const styles = useStyles()
	
	const tabs = props.tabs
	const value = props.value
	const onSelect = props.onSelect

	return (
		<nav className={styles.container}>
			{Object.keys(tabs).map(key => (
				<div key={key} onClick={() => onSelect(key)} className={styles.coiso + (value === key ? (' ' + styles.selected) : '')}>
					{tabs[key]}
				</div>
			))}
			<div className={styles.filler}></div>
		</nav>
	)

}

export default Tabs

const useStyles = createUseStyles({
	container : {
		display : 'flex',
	},
	coiso : {
		backgroundColor : 'white',
		padding : '0.5em',
		borderRight : ['solid', 1, 'lightgray'],
		borderBottom : ['solid', 1, 'lightgray']
	},
	selected : {
		borderBottom : 'none'
	},
	filler : {
		flex : 1,
		borderBottom : ['solid', 1, 'lightgray']
	}
})