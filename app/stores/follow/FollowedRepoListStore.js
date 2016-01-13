/* jshint esnext:true */

import alt from '../../alt';
import FollowedRepoListActions from '../../actions/follow/FollowedRepoListActions';

class FollowedRepoListStore {
  constructor() {
    this.bindActions(FollowedRepoListActions);
  }

  onGetFollowedReposSuccess(data) {
  }

  onGetFollowedReposFail(errorMessage) {
  }
}

export default alt.createStore(FollowedRepoListStore);
