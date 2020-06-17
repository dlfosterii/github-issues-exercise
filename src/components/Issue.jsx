import React from 'react';
import {Link} from 'react-router-dom';

export default function Issue(props) {
    return (
        <div style={{border: '1px solid black'}}>
            <Link style={{textDecoration:'none'}} to={`/issues/${props.number}`}>{props.title}</Link>
            {props.labels.map((label, index)=>{
                return(
                <span key={index} style={{backgroundColor:`#${label.color}`}}>{label.name}</span>)
            })} <br/>
            <i>#{props.number}</i> opened {props.created} hours ago by {props.usr}
        </div>
    )
}

