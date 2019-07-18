import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {  Image, Item, Container } from 'semantic-ui-react'

export default function CardInfo({date, explanation, title, hdurl}) {

return (
    <div className='cardInfo'>
        <h1 className='title'>{title}</h1>
        <h4 className='date' >{date}</h4>
        <Image
    src={hdurl}
    as='a'
    size='medium'
    href='http://google.com'
    target='_blank'
    rounded
    size='huge'
  />

<Container textAlign='center'>
<p className='explanation'>{explanation}</p>
</Container>
    </div>
)

}