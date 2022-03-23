import React from 'react'
import GitHubUser from '../services/GitHubUser'
import PropTypes from 'prop-types'

let username = ''

class SearchUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  userInfoBtn = event => {
    event.preventDefault()

    this.props.displayCallback(1)

    console.log(this.state.display)

    GitHubUser.getByUsername(username.value).then(
      function (response) {
        this.props.updateUser(response.data)
      }.bind(this)
    )
  }

  userReposBtn = event => {
    event.preventDefault()

    this.props.displayCallback(2)

    GitHubUser.getReposByUsername(username.value).then(
      function (response) {
        this.props.updateRepos(response.data)
      }.bind(this)
    )
  }

  userStarredBtn = event => {
    event.preventDefault()

    this.props.displayCallback(3)

    GitHubUser.getStarredByUsername(username.value).then(
      function (response) {
        this.props.updateStarred(response.data)
      }.bind(this)
    )
  }

  saveUsername = event => {
    username = { value: event.target.value }
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>GitHub Search</h1>
        <div className="row">
          <form>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="guicardozodasilva"
                onChange={this.saveUsername}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={this.userInfoBtn}
            >
              Search user
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={this.userReposBtn}
            >
              Repositories
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={this.userStarredBtn}
            >
              Starred repositories
            </button>
          </form>
        </div>
      </div>
    )
  }
}

SearchUser.propTypes = {
  updateUser: PropTypes.func.isRequired,
  updateRepos: PropTypes.func.isRequired,
  updateStarred: PropTypes.func.isRequired,
  displayCallback: PropTypes.func.isRequired
}

export default SearchUser
