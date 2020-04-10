const initialStore ={
  favoriteCharacters: []
}

export const character = (initialState = initialStore, action) => {
  if(action.type === 'ADD CHARACTER') {
    return {
      favoriteCharacters: [...initialState.favoriteCharacters, action.payload]
    }
  }

  if(action.type === 'REMOVE CHARACTER') {
    return {
      favoriteCharacters: initialState.favoriteCharacters.filter(item => item !== action.payload) 
    }
  }

  return initialState
}
