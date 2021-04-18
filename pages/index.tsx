import React from 'react'
import Map from 'src/components/Map'
import SearchCard from 'src/components/SearchCard'
import EntityCard from 'src/components/EntityCard'
import { createUseStyles } from 'react-jss'
import LixeiraModel, { Lixeira } from 'src/api/models/lixeira'
import { GetServerSideProps } from 'next'

interface Props {
    lixeiras : Array<Lixeira>
}

const App : React.FC<Props> = (props) => {

	const styles = useStyles()

    const lixeiras = props.lixeiras

	return (
		<div className={styles.container}>
			<Map/>
			<div className={styles.foreground}>
				<SearchCard lixeiras={lixeiras}/>
				<EntityCard/>
			</div>
		</div>
	)

}

export default App

export const getServerSideProps : GetServerSideProps = async (ctx) => {
    const lixeiras = await LixeiraModel.find({})
    return {
        props : {
            lixeiras : JSON.parse(JSON.stringify(lixeiras))
        }
    }
}

const useStyles = createUseStyles({
	'@global body' : {
		margin : 0
	},
	'container' : {
		'display' : 'flex',
		'width' : '100vw',
		'height' : '100vh'
	},
	foreground : {
		display : 'flex',
		position : 'absolute',
		width : '100%',
		height : '100%'
	}
})