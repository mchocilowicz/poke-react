import React from 'react'

const ViewPage = ({ match }) => (
  <div>
    <h3>{match.params.pokemonId}</h3>
  </div>
)

export default ViewPage
