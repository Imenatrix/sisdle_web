import React from 'react'
import { createUseStyles } from 'react-jss'
import SearchBar from './SearchBar'
import Tabs from './Tabs'

interface Props {
    tabs : {}
    onTabsSelect : (value : any) => void
    selectedTab : any
}

const SearchCardHeader : React.FC<Props> = (props) => {

    const styles = useStyles()

    const tabs = props.tabs
    const selectedTab = props.selectedTab
    const onTabsSelect = props.onTabsSelect

    return (
        <div className={styles.container}>
            <Tabs value={selectedTab} onSelect={onTabsSelect} tabs={tabs}/>
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