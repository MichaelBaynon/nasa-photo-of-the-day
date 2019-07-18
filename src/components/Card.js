import React, { useState , useEffect } from 'react'
import axios from 'axios'
import CardInfo from './CardInfo'




 function Card({}) {
    
    const [card, setCard] = useState([])

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
        .then(res => {
            
            
        const cards = res.data
        
        setCard(cards)
      
        console.log(res.data)  
        
        })
    }, [])
    
    return (
        <div>
            <CardInfo title={card.title} date={card.date} hdurl={card.hdurl} explanation={card.explanation} />
        </div>
    )
}


export default Card;
 

