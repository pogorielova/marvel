import  React from 'react';
import { ListGroup, Image, Button } from 'react-bootstrap';

function Character(props) {

    const { character: { name, thumbnail, id}, history, isFavoriteCharacter } = props;

    const textForButton = !isFavoriteCharacter ? 'Add to favorites' : 'Remove from favorites';

    const clickHandler = !isFavoriteCharacter ? props.addCharacter : props.removeCharacter

    return(
        <ListGroup.Item onClick={() => {
            history.push (`/characters/${id}`)}
        }>
            <div className='pic-container'>
                <Image className='pic' src={`${thumbnail.path}.${thumbnail.extension}`}/>
            </div>
            <div className='hero-name'>{name}</div>
            {/* <div> {!description ? 'no description' : description} </div> */}
            {/* <Link to={`/characters/${id}`}>View more...</Link> */}
            <Button variant="danger" onClick={(e) => {
                e.stopPropagation();
                clickHandler(props.character)
              }}>{textForButton}</Button>
        </ListGroup.Item>
    )
}

export default Character;
