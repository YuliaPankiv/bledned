import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { data } from '../data/user';
import Button from './Button/Button';
import { UserList } from './UsersList/UserList';
import AddUserForm from './addUserForm/AddUserForm';
export class App extends Component {
  state = {
    users: data,
    isListShows: false,
    isFormShow: false,
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
  addUser = userData => {
    const newUser = {
      id: nanoid(),
      ...userData,
    };
    this.setState(prev => {
      return { users: [...prev.users, newUser] };
    });
  };
  closeForm = () => {
    this.setState({ isFormShow: false });
  };

  openForm = () => {
    this.setState({ isFormShow: true });
  };
  render() {
    const { users, isListShows, isFormShow } = this.state;
    return (
      <div>
        {!isListShows ? (
          <Button text="Show list of user" clickHandler={this.showList} />
        ) : (
          <UserList users={users} deleteUser={this.deleteUser} />
        )}

        {isFormShow ? (
          <AddUserForm addNewUser={this.addUser} onFormClose={this.closeForm} />
        ) : (
          <Button text="Add User" clickHandler={this.openForm} />
        )}
      </div>
    );
  }
}
