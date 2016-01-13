/* jshint esnext:true */

import alt from '../../alt';
import RepoActions from '../../actions/repo/RepoActions';

class RepoStore {
  constructor() {
    this.bindActions(RepoActions);
    this.repo = {};
  }

  onGetRepoSuccess(data) {
    this.repo = data;
  }

  onGetRepoFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(RepoStore);
