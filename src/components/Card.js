import React, { useState , useEffect } from 'react'
import axios from 'axios'




 function Card() {
    const [card, setCard] = useState(0)

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
        .then(res => (
            setCard(res.data)
          
        ))
    }, [])
    
    return (
        <div>
<div></div>
        </div>
    )
}


export default Card;
 

