import React, { Component } from "react"
import axios from "../axios"
import { Link } from "react-router-dom"
import "./AddUser.css"

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state={
      email: "",
      username: "",
      password: "",
      type: ""
    }
  }

  changeHandler =(e)=> {
    this.setState({ [e.target.name]: e.target.value })

  }

  submitHandler =(e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post("http://dev.pubmate.io/pubmate/api/0.1/user/create", this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }



  render() {
    const { email, username, password, type } = this.state
    return  (
      <div className="adduser">
        <h1>User Details</h1>
        <button className="adduser__buttonDetails" onClick={() => console.log("opened")}>User Details<span className="arrow">▼</span></button>
        <form onSubmit={this.submitHandler}>
          <label>
            <p>Email</p>
            <input
              className="adduser__input" 
              type="text" 
              name="email"
              value={email} 
              onChange={this.changeHandler}
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
              onChange={this.changeHandler}
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
              onChange={this.changeHandler}
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
              onChange={this.changeHandler}
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