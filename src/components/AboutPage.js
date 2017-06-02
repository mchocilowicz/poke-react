import React from 'react'
import { Header, Image } from 'semantic-ui-react'

export default () => (
  <Header as='h2' icon textAlign='center'>
    <Image
      src='https://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807'
    />
    <Header.Content>
      {'Site created with React and Semantic UI. \n '}
    </Header.Content>
  </Header>
)