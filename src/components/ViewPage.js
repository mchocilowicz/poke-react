import React, { Component } from 'react'
import axios from 'axios';

class ViewPage extends Component {
  componentDidMount() {
    axios
      .get(`http://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonId}`)
      .then(res => res.data).then(console.log);
  }

  render () {
    return (
      <div>
        <h3>{this.props.match.params.pokemonId}</h3>
      </div>
    )
  }
}

export default ViewPage
