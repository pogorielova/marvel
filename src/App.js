import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Characters from "./containers/Characters";
import Stories from "./containers/Stories";
import Main from "./containers/Main";
import Navigation from "./components/Nav";
import CharacterInfo from "./containers/CharacterInfo";
import Favorite from "./containers/Favorite"

function App() {
  return (
    <div>
      <Navigation>
        <Link className='navigation-link' to="/">Main</Link>
        <Link className='navigation-link' to="/characters">Characters</Link>
        <Link className='navigation-link' to="/stories">Stories</Link>
        <Link className='navigation-link' to="/favorite">Favorite heroes</Link>
      </Navigation>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/characters" exact component={Characters} />
        <Route path="/characters/:id" component={CharacterInfo} />
        <Route path="/stories" component={Stories} />
        <Route path="/favorite" component={Favorite} />

      </Switch>
    </div>
  );
}

export default App;
