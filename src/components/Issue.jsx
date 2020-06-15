import React from 'react';


export default function Issue(props) {
    return (
        <div style={{border: '1px solid black'}}>
            <a href={props.url}>{props.title}</a>
        </div>
    )
}

