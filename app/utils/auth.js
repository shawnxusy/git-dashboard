/* jshint esnext: true */

const auth = {
  loggedIn: () => {
    var promise = new Promise(function(resolve, reject) {
      $.ajax({ url: '/api/loggedIn' })
        .done(loggedIn => {
          resolve(loggedIn);
        })
        .fail(jqXhr => {
          console.log("Getting login status failed");
          reject(jqXhr);
        });
    })
    return promise;
  }
};

export default auth;
