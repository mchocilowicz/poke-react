import React from 'react'
import { List, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const PokemonItem = ({ index, name }) => (
  <List.Item>
    <Image avatar src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} />
    <List.Content>
      <Link to={`/pokemon/${index}`}>
        {name.toUpperCase()}
      </Link>
    </List.Content>
  </List.Item>
)

export default PokemonItem
