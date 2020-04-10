import React from 'react';
import {connect} from 'react-redux';
import Character from "../components/Character"

function Favorite(props) {
    return (
        <div className='list-items'>
        { 
            props.favoriteCharacters.map(item => <Character character={item} history={props.history} isFavoriteCharacter={props.favoriteCharacters.includes(item)} />)
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favoriteCharacters: state.characters.favoriteCharacters
    }
}

export default connect(mapStateToProps)(Favorite)