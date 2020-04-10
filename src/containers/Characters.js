import React from 'react';
import { connect } from 'react-redux';
import { Spinner, Form, Button } from 'react-bootstrap';
import '../App.css';
import { apiKey, hash, api } from '../config';
import Character from "../components/Character";
import {addCharacter, removeCharacter} from '../store/actions/characterActions'

// function renderCharacters(characters, history) {
//     return characters.length
//     ? characters.map(item => <Character character={item} key={item.id} history={history} isFavoriteCharacter={this.props.favoriteCharacters.includes(item)} />)
//     : 'No such character'
// }

class Characters extends React.Component {

    state = {
        characters: [],
        search: '',
        loading: false,
    };

    componentDidMount () {
        this.fetchCharacters()
    }

    fetchCharacters =  async (olol) => {
      this.setState({loading: true})
        const query = olol ? `nameStartsWith=${olol}&` : '';
        const data = await fetch(`${api}characters?${query}ts=1&apikey=${apiKey}&hash=${hash}`);
        const json = await data.json();
        this.setState({characters: json.data.results, loading: false})
    };

    handleInputChange = (e) => {
        this.setState({search: e.target.value.toUpperCase()})
    };

    handleCharacterSearch = () => {
        this.fetchCharacters(this.state.search)
    };

    render() {

        const { characters, loading } = this.state;

        return (
            <div className='characters'>
                <Form>
                    <Form.Control onChange={this.handleInputChange} value={this.state.search}/>
                    <Button type="button" variant="secondary" onClick={this.handleCharacterSearch}>Search</Button>
                </Form>
                <div className='list-items'>
                {!this.state.loading
                    //? renderCharacters(this.state.characters, this.props.history)
                    ?  characters.length // === 0
                        ? characters.map(item => <Character character={item} key={item.id} history={this.props.history} addCharacter={this.props.addCharacter} removeCharacter={this.props.removeCharacter} />)
                        : 'No character'
                    : <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                }
                </div>
            </div>
        )
    }
}

    const mapStateToProps = state => {
  return {
    favoriteCharacters: state.characters.favoriteCharacters
  }
}


const mapDispatchToProps= {
  addCharacter
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
