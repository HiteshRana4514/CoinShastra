import react from 'react'

function SearchSuggestions({ index, values }) {

    return (
        <>
            <li className='search-suggestion'><a href="#">{values.name}</a></li>
        </>

    )
}

export default SearchSuggestions