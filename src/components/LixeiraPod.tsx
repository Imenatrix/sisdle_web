import React from 'react'
import Capacitometer from 'src/components/Capacitometer'
import { createUseStyles } from 'react-jss'
import { Lixeira } from 'src/api/models/lixeira'
import SelectedEntityContext from 'src/components/contexts/SelectedEntityContext'

interface Props {
    lixeira : Lixeira
}

const LixeiraPod : React.FC<Props> = (props) => {

	const styles = useStyles()

    const lixeira = props.lixeira

	return (
        <SelectedEntityContext.Consumer>
            {({selected, setSelected}) => (
                <div className={styles.container} onClick={() => setSelected(lixeira)}>
                    <Capacitometer/>
                    <div className={styles.txtContainer}>
                        <div className={styles.txtLocation}>{lixeira.properties.location}</div>
                        <div className={styles.txtDescription}>{lixeira.properties.description}</div>
                    </div>
                </div>
            )}
        </SelectedEntityContext.Consumer>
	)

}

export default LixeiraPod

const useStyles = createUseStyles({
	container : {
		overflow : 'hidden',
		display : 'flex',
		borderRadius : '0.85em',
		border : ['solid', 'lightgray', 1],
		margin : ['1em', 0]
	},
	txtContainer : {
		flex : 1,
		padding : '0.5em',
        borderLeft : ['solid', 'lightgray', 1]
	},
    txtLocation : {

    },
    txtDescription : {
        marginTop : '0.5em',
        fontSize : 10
    }
})