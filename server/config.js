/** Important **/
/** You should not be committing this file to GitHub **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! YOUR! REPO! **/

module.exports = {
  // Find the appropriate database to connect to, default to localhost if not found.
  database: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'localhost',
  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',
  github: {
    clientID: process.env.GITHUB_CLIENTID || '1ed54025f0ba1581b43f',
    clientSecret: process.env.GITHUB_SECRET || '5e9e362d0f19df49ce33637a925b6af26d7b1ecd',
    callbackURL: process.env.GITHUB_CALLBACK || "/auth/github/callback"
  }
};
