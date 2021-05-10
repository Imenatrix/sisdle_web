import React from 'react'
import { createUseStyles } from 'react-jss'
import { MdDone } from 'react-icons/md'

interface Props {
	className : string,
    setSavePressed : () => void
}

// TODO: Modo de edição
const EditButton : React.FC<Props> = (props) => {

	const styles = useStyles()
	// deve mudar entre visualização e formulario de edição
	// em EntityCard
	return (
		<button onClick={props.setSavePressed} className={styles.btn + ' ' + props.className}>
			{
				// botão azul com icone de lapis para edição
                <MdDone color='white' size={25}/>
			}
		</button>
	)

}

export default EditButton

const useStyles = createUseStyles({
	btn : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
		backgroundColor : '#2196F3',
		border : 'none',
		width : '3em',
		height : '3em',
		padding : 0,
		borderRadius : '1.5em',
		'&:focus' : {
			outline : 'none'
		},
		'&:active' : {
			opacity : 0.9,
		}
	}
})