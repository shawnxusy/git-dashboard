/* jshint esnext:true */
import alt from '../../alt';

class FollowedRepoListActions {
  constructor() {
    this.generateActions(
      'getFollowedReposSuccess',
      'getFollowedReposFail'
    );
  }

  getFollowedRepos() {
    console.log("Getting a list of repos you are following!");
    // $.ajax({ url: '/api/repos/shawnxusy' })
    //   .done(data => {
    //     this.actions.getReposSuccess(data);
    //   })
    //   .fail(jqXhr => {
    //     this.actions.getReposFail(data);
    //   });
  }

}

export default alt.createActions(FollowedRepoListActions);
