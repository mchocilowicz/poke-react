import React from 'react'
import { Header, Image } from 'semantic-ui-react'

const MainPage = () => (
  <Header as='h2' icon textAlign='center'>
    <Image
      src='https://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807'/>
    <Header.Content>
      {'PokeReact'}
    </Header.Content>
  </Header>
)

export default MainPage
