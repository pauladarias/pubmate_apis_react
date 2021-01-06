import React, {useState, useEffect} from 'react'
import "./EditPub.css"
import { Link } from "react-router-dom"
import { TextField, Button } from "@material-ui/core"
import axios from 'axios'


function EditPub() {

  return (
    < div className="editpub">
      <h1>Edit Pub Information</h1>
      <div>
        <button className="editpub__buttonName">Name and Adress</button>
        <form className="editpub__form">
          <TextField className="editpub__input" name="name" label="Name" />
          <br />
          <TextField className="editpub__input" name="address" label="Address" />
          <br />
          <TextField className="editpub__input" name="postcode" label="Postcode" />
          <br />
          <TextField className="editpub__input" name="timestamp" label="Time" />
          <br />
          <div className="edit__buttons addpub__buttons_name">
            <button className="editpub__update" >UPDATE</button>
            <Link className="editpub__cancel" to="/">CANCEL</Link>
          </div>
        </form>
      </div>

    </div>
  )
}

export default EditPub
