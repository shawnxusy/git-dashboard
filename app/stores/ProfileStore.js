/* jshint esnext:true */

import alt from '../alt';
import ProfileActions from '../actions/ProfileActions';

class ProfileStore {
  constructor() {
    this.bindActions(ProfileActions);
    this.repos = [];
  }
}

export default alt.createStore(ProfileStore);
