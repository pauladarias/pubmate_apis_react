import React, { useState, useEffect } from 'react'
import "./PubList.css"
import { Link } from "react-router-dom"
import axios from "../axios"
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow } from "@material-ui/core"
import { Edit, Delete } from "@material-ui/icons"

function PubList() {
  const [pubs, setPubs] = useState([])

  const getPubs=async()=> {
    await axios.get("pubmate/api/0.1/pub/2/all")
    .then(response=>{
      console.log(response)
      setPubs(response.data.pub)
    })

  }

  useEffect(async()=> {
    await getPubs()
  }, [])


  // useEffect(()=> {
  //   async function fetchData() {
  //     const request = await axios.get("pubmate/api/0.1/pub/2/all")
  //     console.log(request)
  //     setPubs(request.data.pub)
  //     return request
  //   }
  //   fetchData()

  // }, [])

  return (
    <div className="table">
    <TableContainer>
      <Table className="table__out">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date Modified</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow key={pubs.id}>
            <TableCell>{pubs.landlord}</TableCell>
            <TableCell>{pubs.timestamp}</TableCell>
            <TableCell>
              <Edit className="table__edit"/>
              &nbsp;&nbsp;&nbsp;
              <Delete className="table__delete"/>
            </TableCell>
          </TableRow>
          <TableRow key={pubs.id}>
            <TableCell>{pubs.landlord}</TableCell>
            <TableCell>{pubs.timestamp}</TableCell>
            <TableCell>
              <Edit className="table__edit"/>
              &nbsp;&nbsp;&nbsp;
              <Delete  className="table__delete"/>
            </TableCell>
          </TableRow>
        </TableBody>



        {/* <TableBody>
          {pubs.map(pub =>(
            <TableRow key={pub.id}>
              <TableCell>{pub.landlord}</TableCell>
              <TableCell>{pub.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>

    </div>
  )
}

export default PubList
