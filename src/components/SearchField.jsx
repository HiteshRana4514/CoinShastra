import React, { useState, useEffect } from "react";
import axios from 'axios'
import SearchSuggestions from "./SearchSuggestions";

function SearchField() {
    const [clickSearch, setClickSearch] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState(null);
    const [openSuggestions, setOpenSuggestions] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    function handleSearchBar() {
        setClickSearch(!clickSearch);
    }

    useEffect(()=>{
        if(!clickSearch){
            setOpenSuggestions(false);
        }
        else{
            if(inputValue){
                setOpenSuggestions(true)
            }
        }
    },[clickSearch]);

    useEffect(()=>{
        const searchCoinPaprika = async (query) => {
            try {
                const response = await axios.get(`https://api.coinpaprika.com/v1/search`, {
                    params: {
                        q: query,
                        c: 'currencies',
                        limit: 5
                    }
                });
                setOpenSuggestions(true);
                setSearchValue(response.data.currencies)
            } catch (error) {
                console.error("Error fetching search data:", error);
            }
            console.log(openSuggestions);
            
        };
        inputValue ? searchCoinPaprika(inputValue) : setOpenSuggestions(false);
    },[inputValue])

    return (
        <>
            <div className={`search-block ${clickSearch ? 'active' : ''}`}>
                <input type="text" name="search" id="search-bar" placeholder="Search" className={`search-field ${clickSearch ? 'active' : ''}`} onChange={(e) => {setInputValue(e.target.value)}} />
                <span className={`search-icon ${clickSearch ? 'active' : ''}`} onClick={handleSearchBar}><i></i></span>
                {openSuggestions && (
                    <ul className='search-suggestions-wrap'>
                    {searchValue ? searchValue.map((searchValue, index) => {
                        return (
                            <SearchSuggestions
                                key={index}
                                values={searchValue}
                            />
                        )
                    }) : ''}
                </ul>
                )}
                {!openSuggestions && ''}

            </div>
        </>
    )
}

export default SearchField