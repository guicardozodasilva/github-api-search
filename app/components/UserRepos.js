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
        <div key={key} className="thumbnail thumbnail-custom">
          <div className="caption">
            <div className="text-custom">
              <h3>
                {repo.name}
                <span className="badge badge-custom">
                  {repo.stargazers_count} STARS
                </span>
              </h3>
            </div>
            <p className="description-custom">{repo.description}</p>
            <p>
              <a
                href={repo.html_url}
                className="btn btn-primary btn-custom"
                target="_blank"
                role="button"
              >
                Repository
              </a>
              <a
                href={repo.html_url + '/issues'}
                target="_blank"
                className="btn btn-default btn-custom-2"
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
        <h2 className="text-custom">{this.state.reposCount} repositories</h2>
        {repos}
      </div>
    )
  }
}

UserRepos.propTypes = {
  props: PropTypes.object
}

export default UserRepos
