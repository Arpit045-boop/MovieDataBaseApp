import React from 'react'

function Content(props) {
    return (
        <div>
            <div className='c'>
                <h3>{props.title}</h3>
                <img src={props.img} />
            </div>
        </div>
    )
}

export default Content