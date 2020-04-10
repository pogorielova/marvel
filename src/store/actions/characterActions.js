export function addCharacter(character) {
  return {
    type: 'ADD CHARACTER',
    payload: character
  }
}

export function removeCharacter(character) {
  return {
    type: 'REMOVE CHARACTER',
    payload: character
  }
}
