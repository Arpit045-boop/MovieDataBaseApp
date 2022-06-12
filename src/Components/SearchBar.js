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
            <div className='container'>
                <input className="form-control" type="text" placeholder='Search Movie Name' onChange={getDetails} />
                <button type="button" style={{ margin: "2% 0 0 45%" }} className="btn btn-primary" onClick={() => getData()}>
                    Searches
                </button>
            </div>
            {data.Response && data.Search.map((currentMovie, index) => {
                return (<>
                    <Content key={index} img={currentMovie.Poster} title={currentMovie.Title} year={currentMovie.Year } />
                </>)
            })}
        </div>

    )
}

export default SearchBar