import React from 'react'
import SearchUser from './SearchUser'
import UserInfo from './UserInfo'

class Github extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      repos: [],
      starred: []
    }
    this.updateUser = this.updateUser.bind(this)
    this.updateRepos = this.updateRepos.bind(this)
    this.updateStarred = this.updateStarred.bind(this)
  }

  updateUser(user) {
    this.setState({ user: user })
  }

  updateRepos(repos) {
    this.setState({ repos: repos })
  }

  updateStarred(starred) {
    this.setState({ starred: starred })
  }

  render() {
    return (
      <div className="container">
        <SearchUser
          updateUser={this.updateUser}
          updateRepos={this.updateRepos}
          updateStarred={this.updateStarred}
        />
        <UserInfo
          user={this.state.user}
          repos={this.state.repos}
          starred={this.state.starred}
        />
      </div>
    )
  }
}

export default Github
