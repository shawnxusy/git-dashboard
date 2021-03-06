/* jshint esnext:true */

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import alt from './alt';
import App from './components/App';
import Home from './components/Home';
import Stats from './components/Stats';
import Character from './components/Character';
import CharacterList from './components/CharacterList';
import AddCharacter from './components/AddCharacter';
import Profile from './components/Profile';
import RepoList from './components/repo/RepoList';
import Repo from './components/repo/Repo';
import Login from './components/Login';
import UserStore from './stores/UserStore';
import auth from './utils/auth';

function requireAuth(nextState, replaceState, callback) {
  // console.log("state: ", this.state)
  // $.ajax({ url: '/api/loggedIn' })
  //   .done(loggedIn => {
  //     if (!loggedIn) replaceState({ nextPathname: nextState.location.pathname }, '/login');
  //     callback();
  //   })
  auth.loggedIn().then(function(loggedIn) {
    if (!loggedIn) replaceState({ nextPathname: nextState.location.pathname }, '/login');
    callback();
  })
}

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/stats' component={Stats} />
    <Route path='/characters/:id' component={Character} />
    <Route path='/add' component={AddCharacter} />
    <Route path='/profile' component={Profile} onEnter={requireAuth}>
      <IndexRoute component={RepoList} />
      <Route path='repo/:name' component={Repo} />
    </Route>
    <Route path=':category' component={CharacterList}>
      <Route path=':race' component={CharacterList}>
        <Route path=':bloodline' component={CharacterList} />
      </Route>
    </Route>
  </Route>
);
