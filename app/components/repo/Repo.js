/* jshint esnext:true */

import React from 'react';
import {Link} from 'react-router';
import RepoStore from '../../stores/repo/RepoStore';
import RepoActions from '../../actions/repo/RepoActions';

class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = RepoStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    RepoStore.listen(this.onChange);
    RepoActions.getRepo();
  }

  componentWillUnmount() {
    RepoStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>This is showing a single repo!</h3>
      </div>
    );
  }
}

export default Repo;
