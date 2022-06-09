import React from 'react'
import { useState } from 'react';
import Content from './Content';

function SearchBar() {
    const [data, setData] = useState({});
    const [initialValue, setInitialValue] = useState('De Dana Dan');

    function getDetails(event) {
        var searchvalue = event.target.value;
        setInitialValue(searchvalue);
    }
    const getData = async () => {
        // console.log(initialValue);
        const response = await fetch('https://movie-database-alternative.p.rapidapi.com/?rapidapi-key=295fa71758msh1e4c36614c6494dp1c01d3jsnfceac94fe3da&s=' + initialValue);
        setData(await response.json());
    }

    return (
        <div>
            <input type="text" placeholder='Search Movie Name' onChange={getDetails} />
            <button onClick={() => getData()}>
                Searches
            </button>
            {data.Response && data.Search.map((currentMovie, index) => {
                return (<>
                    <Content key={index} img={currentMovie.Poster} title={currentMovie.Title} />
                </>)
            })}
        </div>

    )
}

export default SearchBar