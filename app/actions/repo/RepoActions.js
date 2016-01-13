/* jshint esnext:true */
import alt from '../../alt';

class RepoActions {
  constructor() {
    this.generateActions(
      'getRepoSuccess',
      'getRepoFail'
    );
  }

  getRepo() {
    console.log("TODO: get repo!");
    // $.ajax({ url: '/api/repos/shawnxusy' })
    //   .done(data => {
    //     this.actions.getReposSuccess(data);
    //   })
    //   .fail(jqXhr => {
    //     this.actions.getReposFail(data);
    //   });
  }

}

export default alt.createActions(RepoActions);
