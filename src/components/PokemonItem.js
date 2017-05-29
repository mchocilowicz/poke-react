import React from 'react'
import { List, Image } from 'semantic-ui-react'

const PokemonItem = ({ index, name }) => (
  <List.Item>
    <Image avatar src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} />
    <List.Content>
      {name.toUpperCase()}
    </List.Content>
  </List.Item>
)

export default PokemonItem
