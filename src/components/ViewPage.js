import React, { Component } from 'react'
import axios from 'axios'
import { Header, Image, Loader, Table } from 'semantic-ui-react'

class ViewPage extends Component {
  componentDidMount () {
    axios
      .get(`http://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonId}`)
      .then(res => res.data).then(data => this.setState({...data}))
  }

  render () {
    if (!this.state) {
      return (
        <Header as='h1' icon textAlign='center'>
          <Loader active inline='centered'/>
        </Header>
      )
    }
    return (
      <Header as='h2' icon textAlign='center'>
        <Image src={this.state.sprites.front_default}/>
        <Image src={this.state.sprites.back_default}/>
        <Header.Content>
          {this.state.name.toUpperCase()}
        </Header.Content>
        <Table fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Base Experience</Table.Cell>
              <Table.Cell>{this.state.base_experience}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Weight</Table.Cell>
              <Table.Cell>{this.state.weight}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Height</Table.Cell>
              <Table.Cell>{this.state.height}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Table fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Type</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.types.map(e => {
              return (
                <Table.Row key={e.type.name}>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Header.Content>
                        {e.type.name}
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </Header>
    )
  }
}

export default ViewPage
