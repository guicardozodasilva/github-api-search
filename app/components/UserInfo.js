import React from 'react'
import PropTypes from 'prop-types'

function UserInfo(props) {
  var userInfo = props.user ? (
    <div className="thumbnail thumbnail-custom">
      <div className="subtitle-custom">
        <img
          className="img-circle img-custom"
          src={props.user.avatar_url}
          alt="avatar"
        />
        <h2>{props.user.name}</h2>
        <h3>{props.user.bio}</h3>
        <p>{props.user.login}</p>
        <p>
          Followers: {props.user.followers} / Following: {props.user.following}
        </p>
        <p>
          <a
            className="btn btn-primary btn-custom"
            href={props.user.html_url}
            target="_blank"
            role="button"
          >
            View details
          </a>
        </p>
      </div>
    </div>
  ) : null

  return userInfo
}

UserInfo.propTypes = {
  user: PropTypes.object
}

export default UserInfo
