import React from 'react'
import PropTypes from 'prop-types'

class UserRepos extends React.Component {
  constructor(props) {
    super(props)
    this.state = { reposCount: 0 }
  }

  componentWillReceiveProps(props) {
    this.setState({ reposCount: props.repos.length })
  }

  render() {
    var repos = this.props.repos.map(function (repo, key) {
      return (
        <div key={key} className="thumbnail">
          <div className="caption">
            <h3>
              {repo.name}
              <span className="badge badge-dark">
                {repo.stargazers_count} STARS
              </span>
            </h3>
            <p>{repo.description}</p>
            <p>
              <a
                href={repo.html_url}
                className="btn btn-primary"
                target="_blank"
                role="button"
              >
                Repository
              </a>
              <a
                href={repo.html_url + '/issues'}
                target="_blank"
                className="btn btn-default"
                role="button"
              >
                Issues ({repo.open_issues})
              </a>
            </p>
          </div>
        </div>
      )
    })

    return (
      <div>
        <h2>{this.state.reposCount} repositories</h2>
        {repos}
      </div>
    )
  }
}

UserRepos.propTypes = {
  props: PropTypes.object
}

export default UserRepos
