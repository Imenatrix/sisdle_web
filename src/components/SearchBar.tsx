import React from 'react'
import { createUseStyles } from 'react-jss'
import { MdSearch } from 'react-icons/md'

const SearchBar : React.FC = () => {

	const styles = useStyles()

	return (
		<div className={styles.container}>
			<input type="text" className={styles.txtSearch}/>
			<button className={styles.btnSearch}>
                <MdSearch color='white' size={15}/>
            </button>
		</div>
	)
}

export default SearchBar

const useStyles = createUseStyles({
	container : {
		display : 'flex',
		borderRadius : '0.85em'
	},
	txtSearch : {
		flex : 1,
		border : ['solid', 'lightgray', 1],
		borderTopLeftRadius : '100vmax',
		borderBottomLeftRadius : '100vmax',
		paddingLeft : '0.5em',
		'&:focus' : {
			outline : 'none',
			border : ['solid', 'lightgray', 2]
		}
	},
	btnSearch : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
		height : '1.7em',
		border : 'none',
		aspectRatio : 1,
		padding : 0,
		backgroundColor : '#2196F3',
		borderTopRightRadius : '0.85em',
		borderBottomRightRadius : '0.85em',
		'&:active' : {
			opacity : 0.9
		},
		'&:focus' : {
			outline : 'none'
		}
	}
})