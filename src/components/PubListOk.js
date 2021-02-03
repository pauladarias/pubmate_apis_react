import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "./PubList.css"
import {makeStyles} from '@material-ui/core/styles'
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField, TextareaAutosize, Text} from '@material-ui/core'
import {Edit, Delete} from '@material-ui/icons'
import Logo from "./logo2.png"

const baseUrl='http://localhost:4050/pubmate/api/0.1/pub/all'

const useStyles = makeStyles((theme) => ({
  modal: {
    fontFamily: "Roboto", 
    position: 'absolute',
    width: "90%",
    height: "90%",
    paddingTop: "30px",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #ff9e1b',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 6, 5),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '75vh',
    overflow: 'scroll',
    outline: "none"
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '30%',
    marginLeft: "15px"
  }
}));

function PubList() {
const styles= useStyles();
  const [data, setData]=useState([]);
  const [modalPost, setModalPost]=useState(false);
  const [modalEdit, setModalEdit]=useState(false);
  const [modalDelete, setModalDelete]=useState(false);

  const [pubSelected, setPubSelected]=useState({
    name:'',
    line1:'',
    line2: '', 
    line3: '',
    city:'',
    county_province:'',
    zip_or_postcode:'',
    country:'',
    imageUrl:'',
    description: ''
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setPubSelected(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(pubSelected);
  }

  const getPubs=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    })
  }

  const postPub=async()=>{
    await axios.post('http://localhost:4050/pubmate/api/0.1/pub', pubSelected)
    .then(response=>{
      setData(data.concat(response.data))
      openCloseModalPost()
    })
  }

  const putPub=async(e)=>{
    e.preventDefault()
    await axios.put('http://localhost:4050/pubmate/api/0.1/pub', pubSelected)
    .then(response=>{
      var dataNueva=data;
      dataNueva.map(pub=>{
        if(pubSelected.id===pub.id){
          pub.landlord=pubSelected.landlord;
          pub.email=pubSelected.email;
          pub.userId=pubSelected.userId;
          pub.line1=pubSelected.line1;
        }
      })
      setData(dataNueva);
      openCloseModalEdit();
    })
  }

  const deletePub=async()=>{
    // DELETE request using fetch with set headers
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(`http://localhost:4050/pubmate/api/0.1/pub/${pubSelected.id}`, requestOptions)
    .then(response=>{
      // setData(data.filter(pub=>pub.id!==pubSelected.id));
      openCloseModalDelete();
    })
    };


  // const deletePub=async()=>{
  //   await axios.delete('http://localhost:4050/pubmate/api/0.1/pub/'+pubSelected.id)
  //   .then(response=>{
  //     // setData(data.filter(pub=>pub.id!==pubSelected.id));
  //     openCloseModalDelete();
  //   })
  // }

  const openCloseModalPost=()=>{
    setModalPost(!modalPost);
  }

  const openCloseModalEdit=()=>{
    setModalEdit(!modalEdit);
  }

  const openCloseModalDelete=()=>{
    setModalDelete(!modalDelete);
  }

  const selectUser=(pub, caso)=>{
    setPubSelected(pub);
    (caso==='Edit')?openCloseModalEdit():openCloseModalDelete()
  }

  useEffect(async()=>{
    await getPubs();
  },[])

  const bodyPost=(
    <div className="flexWrapper">
      <div className={styles.modal}>
        <img className="logoModal" src={Logo} href="/"></img>
        <div className="containerModal">
          <button className="list-backButtonMoldal" onClick={()=>openCloseModalPost()}> ◄ List </button>
          <h3 className="titleModal">Name and Address</h3>
          <TextField name="name" className={styles.inputMaterial} label="Name" onChange={handleChange}/>
          <br /><br />
          <TextField name="line1" className={styles.inputMaterial} label="Address Line 1" onChange={handleChange}/>
          <br /><br />
          <TextField name="line2" className={styles.inputMaterial} label="Address Line 2" onChange={handleChange}/>
          <br /><br />
          <TextField name="line3" className={styles.inputMaterial} label="Address Line 3" onChange={handleChange}/>
          <br /><br />
          <TextField name="city" className={styles.inputMaterial} label="City" onChange={handleChange}/>
          <br /><br />
          <TextField name="county_province" className={styles.inputMaterial} label="County" onChange={handleChange}/>
          <br /><br />
          <TextField name="zip_or_postcode" className={styles.inputMaterial} label="Postcode" onChange={handleChange}/>
          <br /><br />
          <TextField name="country" className={styles.inputMaterial} label="Country" onChange={handleChange}/>
          <br /><br />
          <h3 className="titleModal">Description</h3>
          <p style={{marginLeft:"15px", color:"gray", marginTop: "20px", marginBottom: "10px"}}>Description</p>
          <TextareaAutosize 
            aria-label="minimum height" 
            rowsMin={5}   
            name="description" 
            style={{color:"lightblue", width: '30%', marginLeft: "15px"}}
            // className={styles.inputMaterial} 
            label="Description" 
            onChange={handleChange}
          />
          <br /><br />
          <h3 className="titleModal">Categories</h3>
          <p style={{marginLeft:"15px", color:"gray", marginTop: "20px", marginBottom: "10px"}}>Select Keywords</p>
        </div>


        <div align="right">
          <button className="pub__button1_modal" onClick={()=>postPub()}>SAVE</button>
          <Button style={{color: "grey"}} onClick={()=>openCloseModalPost()}>CANCEL</Button>
        </div>
    </div>
   </div>
    
  )

  const bodyEdit=(
    <div className={styles.modal}>
      <h3>Edit Pub</h3>
      <TextField name="landlord" className={styles.inputMaterial} label="Landlord" onChange={handleChange} value={pubSelected && pubSelected.landlord}/>
      <br /><br />
      <TextField name="email" className={styles.inputMaterial} label="Email" onChange={handleChange} value={pubSelected && pubSelected.email}/>
      <br /><br />
      <TextField name="name" className={styles.inputMaterial} label="Name" onChange={handleChange} value={pubSelected && pubSelected.name}/>
      <br /><br />
      <TextField name="userId" className={styles.inputMaterial} label="User Id" onChange={handleChange} value={pubSelected && pubSelected.userId}/>
      <br /><br />
      <TextField name="group" className={styles.inputMaterial} label="Group" onChange={handleChange} value={pubSelected && pubSelected.group}/>
      <br /><br />
      <TextField name="phone" className={styles.inputMaterial} label="Phone" onChange={handleChange} value={pubSelected && pubSelected.phone}/>
      <br /><br />
      <TextField name="line1" className={styles.inputMaterial} label="Address Line 1" onChange={handleChange} value={pubSelected && pubSelected.line1}/>
      <br /><br />
      <TextField name="line2" className={styles.inputMaterial} label="Address Line 2" onChange={handleChange} value={pubSelected && pubSelected.line2}/>
      <br /><br />
      <TextField name="line3" className={styles.inputMaterial} label="Address Line 3" onChange={handleChange} value={pubSelected && pubSelected.line3}/>
      <br /><br />
      <TextField name="city" className={styles.inputMaterial} label="City" onChange={handleChange} value={pubSelected && pubSelected.city}/>
      <br /><br />
      <TextField name="county_province" className={styles.inputMaterial} label="County" onChange={handleChange} value={pubSelected && pubSelected.county_province}/>
      <br /><br />
      <TextField name="zip_or_postcode" className={styles.inputMaterial} label="Postcode" onChange={handleChange} value={pubSelected && pubSelected.zip_or_postcode}/>
      <br /><br />
      <TextField name="country" className={styles.inputMaterial} label="Country" onChange={handleChange} value={pubSelected && pubSelected.country}/>
      <br /><br />
      <TextField name="imageUrl" className={styles.inputMaterial} label="Image Url" onChange={handleChange} value={pubSelected && pubSelected.imageUrl}/>
      <br /><br />
      <div align="right">
        <button className="pub__button1_modal" onClick={()=>putPub()}>EDIT</button>
        <Button style={{color: "grey"}} onClick={()=>openCloseModalEdit()}>CANCEL</Button>
      </div>
    </div>
  )

  const bodyDelete=(
    <div align="center" className={styles.modal}>
      <p>Are you sure you want to delete <b>{pubSelected && pubSelected.landlord}</b>? </p>
      <div style={{marginTop: "16px"}}>
        <button className="pub__button1_modal" onClick={()=>deletePub()} >DELETE</button>
        <button className="pub__button2_modal" style={{color: "black"}} className="user__button2_modal" onClick={()=>openCloseModalDelete()}>CANCEL</button>
      </div>

    </div>
  )


  return (
    <div className="pubs__container">
    <button className="pubs__addpub" onClick={()=>openCloseModalPost()}>ADD PUB</button>
      <br /><br />
     <TableContainer>
       <Table className="table__out">
         <TableHead>
           <TableRow>
             <TableCell>Name</TableCell>
             <TableCell>Date Modified</TableCell>
             <TableCell>Accions</TableCell>
           </TableRow>
         </TableHead>

         <TableBody>
           {data.map(pub=>(
             <TableRow key={pub.id}>
               <TableCell>{pub.name}</TableCell>
               <TableCell>{pub.timestamp}</TableCell>
               <TableCell>
                 <Edit className="table__edit" onClick={()=>selectUser(pub, 'Edit')}/>
                 &nbsp;&nbsp;&nbsp;
                 <Delete  className="table__delete" onClick={()=>selectUser(pub, 'Delete')}/>
                 </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     
     <Modal
     open={modalPost}
     onClose={openCloseModalPost}>
        {bodyPost}
     </Modal>

     <Modal
     open={modalEdit}
     onClose={openCloseModalEdit}>
        {bodyEdit}
     </Modal>

     <Modal
     open={modalDelete}
     onClose={openCloseModalDelete}>
        {bodyDelete}
     </Modal>
    </div>
  );
}

export default PubList;