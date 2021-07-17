import React from 'react'
import { createUseStyles } from 'react-jss'
import SearchBar from './SearchBar'

const SearchCardHeader : React.FC = () => {

    const styles = useStyles()

    return (
        <div className={styles.container}>
            <SearchBar/>
        </div>
    )
}

export default SearchCardHeader

const useStyles = createUseStyles({
    container : {
        padding : '1.5em',
        boxShadow : [1, 0, 7, 'rgba(0, 0, 0, 0.3)'],
        zIndex : 10
    }
})