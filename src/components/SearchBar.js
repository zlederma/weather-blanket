import { Navbar } from "react-bootstrap";
const SearchBar = ({ query, search, updateQuery }) => {
    return (
        <Navbar className="justify-content-center mb_30" bg="dark" fixed="top" >
            <input
                type="text"
                className="search_bar"
                placeholder="Enter City Name..."
                onChange={updateQuery}
                value={query}
                onKeyPress={search}
            />
        </Navbar>
    )

}

export default SearchBar;