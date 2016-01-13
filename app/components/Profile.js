/* jshint esnext:true */

import React from 'react';
import {Link} from 'react-router';
import ProfileStore from '../stores/ProfileStore';
import ProfileActions from '../actions/ProfileActions';
import FollowedRepoList from './follow/FollowedRepoList';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = ProfileStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ProfileStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>Entering profile page!</h3>
        <div className="col-xs-6">
          <FollowedRepoList />
        </div>
        <div className="col-xs-6">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Profile;
