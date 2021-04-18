import React from 'react'
import LixeiraPod from 'src/components/LixeiraPod'
import lixeira, { Lixeira } from 'src/api/models/lixeira'

interface Props {
    lixeiras : Array<Lixeira>
}

const EntityList : React.FC<Props> = (props) => {

    const lixeiras = props.lixeiras

	return (
		<div>
            {lixeiras.map(lixeira => (
                <LixeiraPod key={lixeira._id} lixeira={lixeira}/>
            ))}
		</div>
	)
}

export default EntityList