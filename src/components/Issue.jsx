import React from 'react';


export default function Issue(props) {
    return (
        <div style={{border: '1px solid black'}}>
            <a style={{textDecoration:'none'}} href={props.url}>{props.title}</a>
            {props.labels.map((label, index)=>{
                return(
                <span key={index} style={{backgroundColor:`#${label.color}`}}>{label.name}</span>)
            })} <br/>
            <i>#{props.number}</i> opened {props.created} hours ago by {props.usr}
        </div>
    )
}

