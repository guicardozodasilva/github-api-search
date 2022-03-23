import React from 'react'
import GitHubUser from '../services/GitHubUser'

let username = ''

class SearchUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = event => {
    event.preventDefault()

    GitHubUser.getByUsername(username.value).then(
      function (response) {
        this.props.updateUser(response.data)
      }.bind(this)
    )

    GitHubUser.getReposByUsername(username.value).then(
      function (response) {
        this.props.updateRepos(response.data)
      }.bind(this)
    )

    GitHubUser.getStarredByUsername(username.value).then(
      function (response) {
        this.props.updateStarred(response.data)
      }.bind(this)
    )

    console.log('opa')
  }

  saveUsername = event => {
    username = { value: event.target.value }
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>GitHub Info</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="guicardozodasilva"
                onChange={this.saveUsername}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchUser
