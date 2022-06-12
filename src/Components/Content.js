import React from 'react'

function Content(props) {
    return (
        <div>
            <div className='c'>
                <h3>{props.title}</h3>
                <img className='poster' src={props.img} />
                <h4>Launch year {props.year}</h4>
            </div>
        </div>
    )
}

export default Content