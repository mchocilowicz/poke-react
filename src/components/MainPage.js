import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const MainPage = () => (
  <Header as='h2' icon textAlign='center'>
    <Icon name='users' circular />
    <Header.Content>
      {'PokeReact'}
    </Header.Content>
  </Header>
)

export default MainPage
