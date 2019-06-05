import React, { Component } from 'react';

class UserItem extends Component {
  render() {
   const { login } = this.props.user;
   console.log(login)

    return (
      <div className='card text-center'>
        {login}
      </div>
    )
  }
}

export default UserItem;