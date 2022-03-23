import React from 'react'
import PropTypes from 'prop-types'

class UserStarred extends React.Component {
  constructor(props) {
    super(props)
    this.state = { starredCount: 0 }
  }

  componentWillReceiveProps(props) {
    this.setState({ starredCount: props.starred.length })
  }

  render() {
    var starred = this.props.starred.map(function (star, key) {
      return (
        <div key={key} className="thumbnail">
          <div className="caption">
            <h3>{star.name}</h3>
            <p>{star.description}</p>
            <p>
              <a
                href={star.html_url}
                className="btn btn-primary"
                target="_blank"
                role="button"
              >
                Starred repository
              </a>
              <a
                href={star.html_url + '/issues'}
                target="_blank"
                className="btn btn-default"
                role="button"
              >
                Issues ({star.open_issues})
              </a>
            </p>
          </div>
        </div>
      )
    })

    return (
      <div>
        <h2>{this.state.starredCount} starred repositories</h2>
        {starred}
      </div>
    )
  }
}

UserStarred.propTypes = {
  starred: PropTypes.object
}

export default UserStarred
