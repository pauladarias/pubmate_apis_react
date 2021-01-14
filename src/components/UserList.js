import React, { Component } from 'react';


class UserList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch("http://dev.pubmate.io/pubmate/api/0.1/user/all")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true, 
          users: json,
        })
      })
  }

  render() {

    let { isLoaded, users } = this.state

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="userlist">
          Data is been loaded
          <ul>
            {users.map(user => {
              <li key={user.id}>
                {user.data.name}
              </li>
            })}
          </ul>
        </div>
      )

    }

  }
}

export default UserList