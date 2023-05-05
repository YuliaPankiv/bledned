import React, { Component } from 'react';

import { data } from '../data/user';
import Button from './Button/Button';
import { UserList } from './UsersList/UserList';
export class App extends Component {
  state = {
    users: data,
    isListShows: false,
  };
  showList = () => {
    this.setState({ isListShows: true });
  };
  deleteUser = id => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(user => user.id !== id),
      };
    });
  };
  render() {
    const { users, isListShows } = this.state;
    return (
      <div>
        {!isListShows ? (
          <Button text="Show list of user" clickHandler={this.showList} />
        ) : (
          <UserList users={users} deleteUser={this.deleteUser} />
        )}
      </div>
    );
  }
}
