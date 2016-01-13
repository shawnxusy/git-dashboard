/* jshint esnext:true */

import alt from '../../alt';
import RepoListActions from '../../actions/repo/RepoListActions';

class RepoListStore {
  constructor() {
    this.bindActions(RepoListActions);
    this.repos = [];
  }

  onGetReposSuccess(data) {
    this.repos = data;
  }

  onGetReposFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(RepoListStore);
