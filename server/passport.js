var GitHubStrategy = require('passport-github2').Strategy;
var User = require('./models/user');

module.exports = function(app, passport, config) {
  // Passport session setup.
  //   To support persistent login sessions, Passport needs to be able to
  //   serialize users into and deserialize users out of the session.  Typically,
  //   this will be as simple as storing the user ID when serializing, and finding
  //   the user by ID when deserializing.  However, since this example does not
  //   have a database of user records, the complete GitHub profile is serialized
  //   and deserialized.
  passport.serializeUser(function(user, done) {
    console.log('serialized, user id is: ', user.userId);
    done(null, user.userId);
  });

  passport.deserializeUser(function(id, done) {
    console.log('deserializeUser');
    User.findOne({ userId: id}, function(err, user) {
      done(err, user);
    });
  });


  // Use the GitHubStrategy within Passport.
  //   Strategies in Passport require a `verify` function, which accept
  //   credentials (in this case, an accessToken, refreshToken, and GitHub
  //   profile), and invoke a callback with a user object.
  passport.use(new GitHubStrategy({
      clientID: config.github.clientID,
      clientSecret: config.github.clientSecret,
      callbackURL: config.github.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOne({ userId: profile.id }, function(err, existingUser) {
          if (existingUser) {
            // If the user is already there in DB
            done(err, existingUser);
          } else {
            // If the user does not exist DB
            var user = new User();
            user.userId = profile.id;
            user.email = profile.emails[0].value;
            user.name = profile.displayName;
            user.picture = profile._json.avatar_url;
            user.tokens.push({ kind: 'github', accessToken: accessToken });
            user.save(function(err) {
              done(err, user);
            });
          }
        });

    }
  ));
};
