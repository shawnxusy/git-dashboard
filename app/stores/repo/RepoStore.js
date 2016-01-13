/* jshint esnext:true */

import alt from '../../alt';
import RepoActions from '../../actions/repo/RepoActions';

class RepoStore {
  constructor() {
    this.bindActions(RepoActions);
  }

  onGetRepoSuccess(data) {

  }

  onGetRepoFail(errorMessage) {

  }
}

export default alt.createStore(RepoStore);
