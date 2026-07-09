import React from 'react'
import WelcomeNav from "../components/utils/WelcomeNav"
import SearchBar from '../components/homePage/SearchBar'
import SearchResults from '../components/searchResults/SearchResults'

const SearchResultPage = () => {
    return (
        <>
            <WelcomeNav />
            <SearchBar />
            <SearchResults />
        </>
    )
}

export default SearchResultPage
