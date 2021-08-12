const SearchBar = ({query, search, updateQuery}) =>{
    return(
        <input
            type = "text"
            className = "searchBar"
            placeholder = "Enter City Name..."
            onChange = {updateQuery}
            value = {query}
            onKeyPress = {search}
        />
    )

}

export default SearchBar;