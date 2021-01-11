import React, { useState, useEffect } from 'react'
import "./AddPub.css"
import { Link } from "react-router-dom"
import { TextField, Button } from "@material-ui/core"
import axios from 'axios'

function AddPub() {
  const [addPub, setAddPub] = useState({
    name: "",
    email: "",
    phone: "",
    group: ""
  })

  const handleChange=e=> {
    const {name, value}=e.target
    setAddPub(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(addPub)
  }

  const postPub=async()=> {
    const response = await axios.post("http://dev.pubmate.io/pubmate/api/0.1/pub", addPub )
    const data = response 
    console.log(data)
    // .then( 
    //   response=>{
    //   console.log(response
    //setAddPub(data.concat(response.data))
  
    
  }

  useEffect(async()=> {
    await postPub()
  }, [])


  // CSS open and close tab 
  const openForm = (formName) => {
    let i   
    let x = document.getElementsByClassName("form")
    // console.log(x)
    // for ( i = 0; i < x.length; i++) {
    //   x[i].style.display = "none"
    // }
    // document.getElementById(formName).style.display = "block"
  }


  return (
    < div className="addpub">
      <h1>Pub Information</h1>
      <div className="addpub__container">
        <button className="addpub__buttonName" onClick={openForm("name")}>Pub Details<span className="arrow">▼</span></button>
        <div id="Name"  className="form" style={{display: "block"}}>
          <form className="addpub__form">
            <TextField className="addpub__input" value={addPub.name} name="name" label="Name" onChange={handleChange}/>
            <br />
            <TextField className="addpub__input" value={addPub.email} name="email" label="Email" onChange={handleChange}/>
            <br />
            <TextField className="addpub__input" value={addPub.phone} name="phone" label="Phone" onChange={handleChange}/>
            <br />
            <TextField className="addpub__input" value={addPub.group} name="group" label="Group" onChange={handleChange}/>
            <br />
            <div className="addpub__buttons addpub__buttons_name">
              <button className="addpub__save" onClick={postPub}>SAVE</button>
              <Link className="addpub__cancel" to="/">CANCEL</Link>
            </div>
          </form>
          <div id="Address"  className="form__2" style={{display: "block"}}>
          <form className="addpub__form addpub__form2">
            <TextField className="addpub__input" name="line1" label="Address Line 1" onChange={handleChange}/>
            <br />
            <TextField className="addpub__input" name="line2" label="Address Line 2" onChange={handleChange}/>
            <br />
            <TextField className="addpub__input" name="line3" label="Address Line 3" onChange={handleChange}/>
            <br />
            <TextField className="addpub__input" name="county" label="County" onChange={handleChange}/>
            <br />
            <TextField className="addpub__input" name="postcode" label="Postcode" onChange={handleChange}/>
            <br />
            <div className="addpub__buttons addpub__buttons_name">
              <button className="addpub__save" onClick={postPub}>SAVE</button>
              <Link className="addpub__cancel" to="/">CANCEL</Link>
            </div>
          </form>
        </div>
        </div>
      </div>
      
      <div>
        <button className="addpub__buttonDescription" onClick={openForm("name")}>Description<span className="arrow">▼</span></button>
        <div id="Description"  className="form" style={{display: "none"}}>
          <form className="addpub__form">
            <TextField className="addpub__input" name="description" label="Description" onChange={handleChange}/>
            <br />
            <div className="addpub__buttons addpub__buttons_description">
              <button className="addpub__save" onClick={postPub}>SELECT KEYWORDS</button>
              <button className="addpub__save" onClick={postPub}>SAVE</button>
              <Link className="addpub__cancel" to="/">CANCEL</Link>
            </div>
          </form>
        </div>
      </div>

      <div>
        <button className="addpub__buttonOpeningHours" onClick={openForm("name")}>Opening Hours<span className="arrow">▼</span></button>
        <div id="OpeningHours"  className="form" style={{display: "none"}}>
          <form className="addpub__form">
            <TextField className="addpub__input" name="description" label="Description" onChange={handleChange}/>
            <br />
            <div className="addpub__buttons addpub__buttons_description">
              <button className="addpub__save" onClick={postPub}>SELECT KEYWORDS</button>
              <button className="addpub__save" onClick={postPub}>SAVE</button>
              <Link className="addpub__cancel" to="/">CANCEL</Link>
            </div>
          </form>
        </div>
      </div>

      <div>
        <button className="addpub__buttonPhotos" onClick={openForm("name")}>Photos<span className="arrow">▼</span></button>
        <div id="Photos"  className="form" style={{display: "none"}}>
          <form className="addpub__form">
            <TextField className="addpub__input" name="description" label="Description" onChange={handleChange}/>
            <br />
            <div className="addpub__buttons addpub__buttons_description">
              <button className="addpub__save" onClick={postPub}>SELECT KEYWORDS</button>
              <button className="addpub__save" onClick={postPub}>SAVE</button>
              <Link className="addpub__cancel" to="/">CANCEL</Link>
            </div>
          </form>
        </div>
      </div>

      <div>
        <button className="addpub__buttonEvents" onClick={openForm("name")}>Events<span className="arrow">▼</span></button>
        <div id="Events"  className="form" style={{display: "none"}}>
          <form className="addpub__form">
            <TextField className="addpub__input" name="description" label="Description" onChange={handleChange}/>
            <br />
            <div className="addpub__buttons addpub__buttons_description">
              <button className="addpub__save" onClick={postPub}>SELECT KEYWORDS</button>
              <button className="addpub__save" onClick={postPub}>SAVE</button>
              <Link className="addpub__cancel" to="/">CANCEL</Link>
            </div>
          </form>
        </div>
      </div>

      <div>
        <button className="addpub__buttonDeals" onClick={openForm("name")}>Deals<span className="arrow">▼</span></button>
        <div id="Deals"  className="form" style={{display: "none"}}>
          <form className="addpub__form">
            <TextField className="addpub__input" name="description" label="Description" onChange={handleChange}/>
            <br />
            <div className="addpub__buttons addpub__buttons_description">
              <button className="addpub__save" onClick={postPub}>SELECT KEYWORDS</button>
              <button className="addpub__save" onClick={postPub}>SAVE</button>
              <Link className="addpub__cancel" to="/">CANCEL</Link>
            </div>
          </form>
        </div>
      </div>

      <div>
        <button className="addpub__buttonReviews" onClick={openForm("name")}>Reviews<span className="arrow">▼</span></button>
        <div id="Reviews"  className="form" style={{display: "none"}}>
          <form className="addpub__form">
            <TextField className="addpub__input" name="description" label="Description" onChange={handleChange}/>
            <br />
            <div className="addpub__buttons addpub__buttons_description">
              <button className="addpub__save" onClick={postPub}>SELECT KEYWORDS</button>
              <button className="addpub__save" onClick={postPub}>SAVE</button>
              <Link className="addpub__cancel" to="/">CANCEL</Link>
            </div>
          </form>
        </div>
      </div>



      


    </div>


  
  )
}

export default AddPub
