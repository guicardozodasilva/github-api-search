import React from 'react'
import SearchUser from './SearchUser'
import UserInfo from './UserInfo'
import UserRepos from './UserRepos'
import UserStarred from './UserStarred'

class Github extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      repos: [],
      starred: [],
      display: 0
    }

    this.updateUser = this.updateUser.bind(this)
    this.updateRepos = this.updateRepos.bind(this)
    this.updateStarred = this.updateStarred.bind(this)
    this.setDisplay = this.setDisplay.bind(this)
  }

  setDisplay(newDisplay) {
    this.setState({ display: newDisplay })
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
    let retorno

    if (this.state.display === 1) {
      retorno = <UserInfo user={this.state.user} />
    } else if (this.state.display === 2) {
      retorno = <UserRepos repos={this.state.repos} />
    } else if (this.state.display === 3) {
      retorno = <UserStarred starred={this.state.starred} />
    }

    return (
      <div className="container">
        <SearchUser
          updateUser={this.updateUser}
          updateRepos={this.updateRepos}
          updateStarred={this.updateStarred}
          displayCallback={this.setDisplay}
        />
        {retorno}
      </div>
    )
  }
}

export default Github
