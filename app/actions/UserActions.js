/* jshint esnext:true */

import alt from '../alt';

/*
 * Declaring UserActions using ES2015. This is equivalent to creating
 * function UserActions() {}
 * AND
 * UserActions.prototype.create() = function(data) {}
 */
class UserActions {

  loginsuccess(email) {
    this.dispatch(email);
  }

  logout() {
    this.dispatch();
    $.ajax({
      url: '/logout',
      type: 'GET'
    })
      .then((response, textStatus) => {
        if (textStatus === 'success') {
          // Dispatch another event for successful login
          this.actions.logoutsuccess();
        }
      }, () => {
        // Dispatch another event for a bad login
      });
  }

  logoutsuccess() {
    this.dispatch();
  }
}

export default alt.createActions(UserActions);
