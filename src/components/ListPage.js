import React from 'react'
import { Card } from 'semantic-ui-react'
import P from '../resources/pokemons.json'
import PokemonItem from './PokemonItem'

const ListPage = () => (
  <Card.Group>
    {P.pokemons.map((pok, index) =>
      <PokemonItem key={pok.name} index={index + 1} name={pok.name} />)
    }
  </Card.Group>
)

export default ListPage
