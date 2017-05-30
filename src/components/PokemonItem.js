import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const PokemonItem = ({ index, name }) => (
  <Card>
    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} />
    <Card.Content>
      <Card.Header>
        {index}
      </Card.Header>
      <Card.Description>
        <Link to={`/pokemon/${index}`}>
          {name.toUpperCase()}
        </Link>
      </Card.Description>
    </Card.Content>
  </Card>
)

export default PokemonItem
