import React, { Component } from 'react'
import axios from 'axios';
import { Loader } from 'semantic-ui-react'

class ViewPage extends Component {
  componentDidMount() {
    axios
      .get(`http://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonId}`)
      .then(res => res.data).then(data => this.setState({ ...data }))
  }

  render () {
    console.log(this.state)
    if (!this.state) {
      return <Loader active inline='centered' />
    }
    return (
      <div>
        <h3>{this.props.match.params.pokemonId}</h3>
      </div>
    )
  }
}

export default ViewPage
