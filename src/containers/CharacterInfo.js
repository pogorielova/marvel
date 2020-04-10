import React from 'react';
import { apiKey, hash, api } from '../config';
import {Button} from 'react-bootstrap'

class CharacterInfo extends React.Component {
  state = {
    character: null,
  }

  async componentDidMount() {
    const data = await fetch(`${api}characters/${this.props.match.params.id}?ts=1&apikey=${apiKey}&hash=${hash}`);
    const json = await data.json();
    console.log(json)
    this.setState( {character: json.data.results[0]})
  }

  // handleGoBack = () => {
  //   this.props.history.goBack()
  // }

  render() {
    return (
      <div>
      <Button variant="info" onClick={this.props.history.goBack}>Go back</Button>
        Hi there, my name is &nbsp;
        {this.state.character && this.state.character.name}
        <div>
          {this.state.character && this.state.character.description}
        </div>
      </div>
    )
  }
}

export default CharacterInfo;
