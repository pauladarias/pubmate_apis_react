import React, { Component } from "react"
import axios from "../axios"
import { Link } from "react-router-dom"
import "./AddUser.css"

class AddUser extends Component {
  constructor(props) {
    super(props);
  this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) { 
   this.setState({ [event.target.name]: event.target.value });  
 }
 
 handleSubmit(event) {
 let data = this.state;
   const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
      fetch('http://dev.pubmate.io/pubmate/api/0.1/user/create', requestOptions)
          .then(async response => {
              const data = await response.json();
              // check for error response
              if (!response.ok) {
                  // get error message from body or default to response status
                  const error = (data && data.message) || response.status;
                  return Promise.reject(error);
              }
              this.setState({ postId: data.id })
          })
          .catch(error => {
              this.setState({ errorMessage: error.toString() });
              console.error('There was an error!', error);
          });
}



  render() {
    const { email, username, password, type } = this.state
    return  (
      <div className="adduser">
        <h1>User Details</h1>
        <button className="adduser__buttonDetails" onClick={() => console.log("opened")}>User Details<span className="arrow">▼</span></button>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Email</p>
            <input
              className="adduser__input" 
              type="text" 
              name="email"
              value={email} 
              onChange={this.handleChange}
            >
            </input>
          </label>
          <label>
            <p>Username</p>
            <input 
              className="adduser__input"
              type="text" 
              name="username"
              value={username} 
              onChange={this.handleChange}
            >
            </input>
          </label>
          <label>
            <p>Password</p>
            <input 
              className="adduser__input"
              type="text" 
              name="password"
              value={password} 
              onChange={this.handleChange}
            >
            </input>
          </label>
          <label>
            <p>Type</p>
            <input 
              className="adduser__input"
              type="text" 
              name="type"
              value={type} 
              onChange={this.handleChange}
            >
            </input>
          </label><br></br>
          <button className="adduser__save adduser__buttons" type="submit">SAVE</button>
          <Link className="adduser__cancel adduser__buttons" to="/">CANCEL</Link>
        </form>

      </div>
    )

  }
}

export default AddUser