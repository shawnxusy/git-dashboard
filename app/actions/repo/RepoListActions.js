/* jshint esnext:true */
import alt from '../../alt';

class RepoListActions {
  constructor() {
    this.generateActions(
      'getReposSuccess',
      'getReposFail'
    );
  }

  getRepos() {
    $.ajax({ url: '/api/repos/shawnxusy' })
      .done(data => {
        this.actions.getReposSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getReposFail(data);
      });
  }

}

export default alt.createActions(RepoListActions);
