import React, { useState, useEffect } from 'react'
import "./UserList.css"
import { Link } from "react-router-dom"
import axios from "../axios"
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow } from "@material-ui/core"
import { Edit, Delete } from "@material-ui/icons"

function UserList() {
  const [users, setUsers] = useState([])

  const getUsers=async()=> {
    await axios.get("pubmate/api/0.1/user/all")
    .then(response=>{
      console.log(response)
      console.log(response.data)
      setUsers(response.data.user)
    })
    
  }

  useEffect(async()=> {
    await getUsers()
  }, [])


  return (
    <div className="table">
    <TableContainer>
      <Table className="table__out">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Date Modified</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
        <TableRow key={users.data[0].id}>
              <TableCell>{users.data[0].email}</TableCell>
              <TableCell>{users.data[0].timestamp}</TableCell>
              <TableCell>
              <Edit className="table__edit"/>
              &nbsp;&nbsp;&nbsp;
              <Delete  className="table__delete"/>
            </TableCell>
            </TableRow>
        </TableBody> */}

        <TableBody>
          {users.map(user =>(
            <TableRow key={user.id}>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.timestamp}</TableCell>
              <TableCell>
              <Edit className="table__edit"/>
              &nbsp;&nbsp;&nbsp;
              <Delete  className="table__delete"/>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>




      </Table>
    </TableContainer>

    </div>
  )
}

export default UserList
