import React from 'react'
import { createUseStyles } from 'react-jss'

interface Props {
	className : string,
    setSavePressed : () => void
}

const EditButton : React.FC<Props> = (props) => {

	const styles = useStyles()
	// deve mudar entre visualização e formulario de edição
	// em EntityCard
	return (
		<button onClick={props.setSavePressed} className={styles.btn + ' ' + props.className}>
			{
				// botão azul com icone de lapis para edição
			}
		</button>
	)

}

export default EditButton

const useStyles = createUseStyles({
	btn : {
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