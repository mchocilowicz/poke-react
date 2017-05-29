import React from 'react'
import { Container, List } from 'semantic-ui-react'
import P from '../resources/pokemons.json'
import PokemonItem from './PokemonItem'

const ListPage = () => (
  <Container fluid textAlign={'fluid'}>
    <List horizontal ordered selection link size={'massive'}>
      {P.pokemons.map((pok, index) =>
        <PokemonItem key={pok.name} index={index+1} name={pok.name} />)
      }
    </List>
  </Container>
)

export default ListPage
