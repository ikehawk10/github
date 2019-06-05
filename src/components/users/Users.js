import React, { Component } from 'react';
import UserItem from './UserItem';

class User extends Component {
  state = {
    users: [
      {
        login: 'facebook.com'
      },
      {
        login: 'gmail.com'
      },
      {
        login: 'twitter.com'
      }
    ]
  }
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user, i) => {
          return <UserItem key={i} user={user} />
        })}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
}

export default User;