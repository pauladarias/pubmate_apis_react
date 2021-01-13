import React, { useState } from 'react'
import "./AddPub.css"
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import { useFormFields } from "../libs/hooksLib"
import axios from "../axios"
 
function AddPub () {
  const [fields, handleFieldChange] = useFormFields({
    name: "",
    email: "",
    phone: "",
    group: ""
  })

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await axios.post("http://dev.pubmate.io/pubmate/api/0.1/pub", {name : fields.name, email: fields.email, phone: fields.phone, group: fields.group} )
      .then( 
        response=>{
        console.log(response.config.data)
       })
      console.log(response)
    } catch(err) {
      console.log(err)
    }

  }



return (
  <div className="addpub">
    <h1>Pub Information</h1>
    <button className="addpub__buttonName" onClick={() => console.log("opened")}>Pub Details<span className="arrow">▼</span></button>
    <Form  className="addpub__form"size="lg" onSubmit={handleSubmit}>
      <Form.Group  size="lg" controlId="name">
        <Form.Label >Name</Form.Label><br></br>
        <Form.Control 
          className="addpub__input"
          autoFocus
          type="name"
          value={fields.name}
          onChange={handleFieldChange}
        /><br></br>
      </Form.Group>
      <Form.Group size="lg" controlId="email">
        <Form.Label>Email</Form.Label><br></br>
        <Form.Control
          className="addpub__input"
          type="email"
          value={fields.email}
          onChange={handleFieldChange}
        /><br></br>
      </Form.Group>
      <Form.Group size="lg" controlId="phone">
        <Form.Label>Phone</Form.Label><br></br>
        <Form.Control
          className="addpub__input"
          type="phone"
          value={fields.phone}
          onChange={handleFieldChange}
        /><br></br>
      </Form.Group>
      <Form.Group size="lg" controlId="group">
        <Form.Label>Group</Form.Label><br></br>
        <Form.Control
          className="addpub__input"
          type="group"
          value={fields.group}
          onChange={handleFieldChange}
        /><br></br>
      </Form.Group>
      <Button
        className="addpub__save addpub__buttons"
        block
        size="lg"
        type="submit"
        //disabled={!validateForm()}
      >
        SAVE
      </Button>
      <Link className="addpub__cancel addpub__buttons" to="/">CANCEL</Link>
    </Form>  
  </div>
 )
}

export default AddPub