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
    this.loadData()
  }

  loadData = async () => {
    const response = await fetch('http://dev.pubmate.io/pubmate/api/0.1/user/all')
    if (response) {
      const allusers = await response.json() 
      console.log(response)
      console.log(allusers)
      console.log(allusers[0].email)
      this.setState({
        isLoaded: true,
        users: [...allusers]

      })
    }
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
            {users.map(user => (
              <li key={user.id}>
                {user.email}
              </li>
            ))}
          </ul>
        </div>
      )

    }

  }
}

export default UserList



