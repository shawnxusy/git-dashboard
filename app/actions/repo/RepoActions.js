/* jshint esnext:true */
import alt from '../../alt';

class RepoActions {
  constructor() {
    this.generateActions(
      'getRepoSuccess',
      'getRepoFail'
    );
  }

  getRepo(repoName) {
    $.ajax({ url: '/api/repo/' + repoName })
      .done(data => {
        this.actions.getRepoSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getRepoFail(data);
      });
  }

}

export default alt.createActions(RepoActions);
