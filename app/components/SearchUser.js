import React from 'react';
import GitHubUser from '../services/GitHubUser';
import PropTypes from 'prop-types';

let username = '';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  userInfoBtn = (event) => {
    event.preventDefault();

    GitHubUser.getByUsername(username.value)
      .then(
        function (response) {
          this.props.displayCallback(1);
          this.props.updateUser(response.data);
        }.bind(this),
      )
      .catch((e) => {
        if (e.response.status === 404) {
          this.props.displayCallback(4);
          this.props.updateUser(null);
          console.log(e.response);
        }
      });
  };

  userReposBtn = (event) => {
    event.preventDefault();

    GitHubUser.getReposByUsername(username.value)
      .then(
        function (response) {
          this.props.displayCallback(2);
          this.props.updateRepos(response.data);
        }.bind(this),
      )
      .catch((e) => {
        if (e.response.status === 404) {
          this.props.displayCallback(4);
          this.props.updateRepos([]);
        }
      });
  };

  userStarredBtn = (event) => {
    event.preventDefault();

    GitHubUser.getStarredByUsername(username.value)
      .then(
        function (response) {
          this.props.displayCallback(3);
          this.props.updateStarred(response.data);
        }.bind(this),
      )
      .catch((e) => {
        if (e.response.status === 404) {
          this.props.displayCallback(4);
          this.props.updateStarred([]);
        }
      });
  };

  saveUsername = (event) => {
    username = { value: event.target.value };
  };

  render() {
    return (
      <div className="jumbotron jumbotron-custom">
        <div className="title-custom">
          <h1>GitHub Search</h1>
        </div>
        <div className="row">
          <form>
            <div className="form-group">
              <div className="subtitle-custom">
                <label>Username</label>
              </div>
              <input
                type="text"
                className="form-control form-control-custom"
                placeholder="guicardozodasilva"
                onChange={this.saveUsername}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-custom"
              onClick={this.userInfoBtn}
            >
              Search user
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-custom"
              onClick={this.userReposBtn}
            >
              Repositories
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-custom"
              onClick={this.userStarredBtn}
            >
              Starred
            </button>
          </form>
        </div>
      </div>
    );
  }
}

SearchUser.propTypes = {
  updateUser: PropTypes.func.isRequired,
  updateRepos: PropTypes.func.isRequired,
  updateStarred: PropTypes.func.isRequired,
  displayCallback: PropTypes.func.isRequired,
};

export default SearchUser;
