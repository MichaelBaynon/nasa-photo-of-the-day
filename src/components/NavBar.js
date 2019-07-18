import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Select } from 'semantic-ui-react'

const pictureOptions = [
    { key: 'stars', value: 'stars', text: 'Stars' },
    { key: 'pl', value: 'pl', text: 'Planets' },
    { key: 'er', value: 'er', text: 'Earth' },
]


export default function NavBar() {
    return (
        <div className='navBar'>
            <h6>Nasa Daily</h6>
            <Button animated>
      <Button.Content visible><a href='https://www.nasa.gov/'> Home</a> </Button.Content>
      <Button.Content hidden><a href='https://www.nasa.gov/'></a>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>

    
  <Select placeholder='Select picture type' options={pictureOptions} />

            <Button animated>
      <Button.Content visible><a href='https://www.nasa.gov/multimedia/imagegallery/iotd.html'> More Pictures</a> </Button.Content>
      <Button.Content hidden color='white'><a href='https://www.nasa.gov/multimedia/imagegallery/iotd.html'></a>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
        </div>
    )
}