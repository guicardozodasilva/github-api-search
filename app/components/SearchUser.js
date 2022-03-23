import React from 'react'
import GitHubUser from '../services/GitHubUser'
import PropTypes from 'prop-types'

let username = ''

class SearchUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '', display: 0 }

    this.userInfoBtn = this.userInfoBtn.bind(this)
  }

  userInfoBtn = event => {
    event.preventDefault()

    this.setState({ display: 1 })
    this.props.displayCallback(this.state.display)

    GitHubUser.getByUsername(username.value).then(
      function (response) {
        this.props.updateUser(response.data)
      }.bind(this)
    )

    GitHubUser.getStarredByUsername(username.value).then(
      function (response) {
        this.props.updateStarred(response.data)
      }.bind(this)
    )
  }

  reposInfoBtn = event => {
    event.preventDefault()

    this.setState({ display: 2 })
    this.props.displayCallback(this.state.display)

    GitHubUser.getReposByUsername(username.value).then(
      function (response) {
        this.props.updateRepos(response.data)
      }.bind(this)
    )
  }

  saveUsername = event => {
    username = { value: event.target.value }
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>GitHub Info</h1>
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
              className="btn btn-primary"
              onClick={this.userInfoBtn}
            >
              Search User
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.reposInfoBtn}
            >
              Repositories
            </button>
          </form>
        </div>
      </div>
    )
  }
}

SearchUser.propTypes = {
  updateUser: PropTypes.func.isRequired
}

export default SearchUser
