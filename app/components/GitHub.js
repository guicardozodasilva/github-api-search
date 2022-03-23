import React from 'react'
import SearchUser from './SearchUser'
import UserInfo from './UserInfo'

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

  setDisplay(display) {
    this.setState({ display })
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
          displayCallback={this.setDisplay}
        />
        {(() => {
          if (this.state.display === 1) {
            return <UserInfo user={this.state.user} />
          } else if (this.state.display === 2) {
            return <p>Aqui serão listados os repositórios</p>
          } else {
            return <p>OPA, aqui é o começo</p>
          }
        })()}
      </div>
    )
  }
}

export default Github
