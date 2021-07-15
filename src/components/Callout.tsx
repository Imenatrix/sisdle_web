import React from 'react'
import { createUseStyles } from 'react-jss'
import { Popup } from 'react-map-gl'
import { Lixeira } from 'src/api/models/lixeira'

interface Props {
    lixeira : Lixeira
}

const Callout : React.FC<Props> = (props) => {

    const styles = useStyles()

    const lixeira = props.lixeira


    return (
        <Popup closeButton={false} offsetTop={-17} latitude={lixeira.geometry.coordinates[1]} longitude={lixeira.geometry.coordinates[0]}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.txtLocation}>
                        {lixeira.properties.location}
                    </p>
                    <hr/>
                    <p className={styles.txtCapacity}>
                        {lixeira.properties.capacity + '%'}
                    </p>
                    <p className={styles.txtDescription}>
                        {lixeira.properties.description}
                    </p>
                </div>
            </div>
        </Popup>
    )
}
export default Callout

const useStyles = createUseStyles({
    container : {
        display : 'flex',
        flexDirection : 'row-reverse',
        width : 175
    },
    content : {
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: 'white',
    },
    txtLocation : {
        textAlign : 'center',
        textAlignVertical : 'center',
        fontSize : 20
    },
    txtCapacity : {
        color: 'black',
        textAlign: 'center',
        textAlignVertical : 'center',
        flex : 2
    },
    txtDescription : {
        textAlign : 'center',
        color : 'lightgray',
        marginBottom : 5
    }
})