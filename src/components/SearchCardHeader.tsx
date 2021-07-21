import React from 'react'
import { createUseStyles } from 'react-jss'
import SearchBar from './SearchBar'
import Tabs from './Tabs'

interface Props {
    tabs : {}
}

const SearchCardHeader : React.FC<Props> = (props) => {

    const styles = useStyles()

    const tabs = props.tabs

    return (
        <div className={styles.container}>
            <Tabs tabs={tabs}/>
            <div className={styles.searchBarContainer}>
                <SearchBar/>
            </div>
        </div>
    )
}

export default SearchCardHeader

const useStyles = createUseStyles({
    container : {
        boxShadow : [1, 0, 7, 'rgba(0, 0, 0, 0.3)'],
        zIndex : 10
    },
    searchBarContainer : {
        margin : '1.5em'
    }
})