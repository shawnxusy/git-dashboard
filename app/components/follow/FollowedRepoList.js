/* jshint esnext:true */

import React from 'react';
import {Link} from 'react-router';
import FollowedRepoListStore from '../../stores/follow/FollowedRepoListStore';
import FollowedRepoListActions from '../../actions/follow/FollowedRepoListActions';

class FollowedRepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = FollowedRepoListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FollowedRepoListStore.listen(this.onChange);
    FollowedRepoListActions.getFollowedRepos();
  }

  componentWillUnmount() {
    FollowedRepoListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    // var repoNodes = this.state.repos.map((repo, index) => {
    //   return (
    //     <div key={repo.id}>
    //       <div>{repo.name}</div>
    //     </div>
    //   );
    // });

    return (
      <div>
        <h3 className='text-center'>Here is the list of repos you are following!</h3>
      </div>
    );
  }
}

export default FollowedRepoList;
