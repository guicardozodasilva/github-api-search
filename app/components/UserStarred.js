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
        <div key={key} className="thumbnail thumbnail-custom">
          <div className="caption">
            <div className="text-custom">
              <h3>{star.name}</h3>
            </div>
            <p className="description-custom">{star.description}</p>
            <p>
              <a
                href={star.html_url}
                className="btn btn-primary btn-custom"
                target="_blank"
                role="button"
              >
                Starred repository
              </a>
              <a
                href={star.html_url + '/issues'}
                target="_blank"
                className="btn btn-default btn-custom-2"
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
        <h2 className="text-custom">
          {this.state.starredCount} starred repositories
        </h2>
        {starred}
      </div>
    )
  }
}

UserStarred.propTypes = {
  starred: PropTypes.object
}

export default UserStarred
