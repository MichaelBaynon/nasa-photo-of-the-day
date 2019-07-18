import React from 'react'

export default function CardInfo({date, explanation, title, hdurl}) {

return (
    <div className='cardInfo'>
        <h1 className='title'>{title}</h1>
        <h4 className='date' >{date}</h4>
<img src={hdurl} title={title} style={{height: '800px', width: '1000px'}} />
<p className='explanation'>{explanation}</p>
    </div>
)

}