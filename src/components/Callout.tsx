import React from 'react'
import { createUseStyles } from 'react-jss'
import { Popup } from 'react-map-gl'
import Lixeira from 'src/shared/Lixeira'

interface Props {
    lixeira : Lixeira
}

const Callout : React.FC<Props> = (props) => {

    const styles = useStyles()

    const lixeira = props.lixeira


    return (
        <Popup closeButton={false} offsetTop={-17} latitude={lixeira.geometry.coordinates[1]} longitude={lixeira.geometry.coordinates[0]}>
            <div className={styles.container}>
                <p className={styles.txtLocation}>
                    {lixeira.properties.location}
                </p>
                <hr className={styles.hr}/>
                <p className={styles.txtCapacity}>
                    {lixeira.properties.capacity + '%'}
                </p>
                <p className={styles.txtDescription}>
                    {lixeira.properties.description}
                </p>
            </div>
        </Popup>
    )
}
export default Callout

const useStyles = createUseStyles({
    hr : {
        width : '100%'
    },
    container : {
        display : 'flex',
        justifyContent : 'center',
        width : 175,
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: 'white',
        flexDirection : 'column'
    },
    txtLocation : {
        textAlign : 'center',
        textAlignVertical : 'center',
        fontSize : 20
    },
    txtCapacity : {
        textAlign: 'center',
        textAlignVertical : 'center',
        flex : 2
    },
    txtDescription : {
        textAlign : 'center',
        marginBottom : 5
    }
})