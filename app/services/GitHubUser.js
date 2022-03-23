var axios = require('axios')

var GitHubUser = {
  getByUsername: function (username) {
    return axios.get('https://api.github.com/users/' + username)
  },

  getReposByUsername: function (username) {
    return axios.get('https://api.github.com/users/' + username + '/repos')
  },

  getStarredByUsername: function (username) {
    return axios.get('https://api.github.com/users/' + username + '/starred')
  }
}

module.exports = GitHubUser
