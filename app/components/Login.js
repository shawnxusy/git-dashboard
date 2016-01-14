/* jshint esnext:true */
import React from 'react';
import ReactDOM from 'react-dom';

import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';

class Login extends React.Component {
  /*
   * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
   * properties on the constructor
   * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
   */
  constructor(props) {
    super(props);
    this.state = UserStore.getState();
  }

  componentDidMount() {
    UserStore.listen(this.onChange);
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  }

  onChange() {
    this.setState({
      user: UserStore.getState().user
    });
  }

  render() {
    let renderedResult;
    renderedResult = (
      <div>
        <h1>Github Login Demo</h1>
        <fieldset>
          <a href="/auth/github">Login with Github</a>
        </fieldset>
      </div>
    );

    return (
        <div>
          {renderedResult}
        </div>
    );
  }
}

export default Login;
