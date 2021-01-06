import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"
import PubList  from "./PubList"


function Home(){
    return (
    <div className="home">
      <h1>Pub List</h1>
      <div>
        <form>
        <Link className="home__addpub"to="/add" >Add Pub</Link><br></br>
        <div className="home__inputs">
          <input 
            className="home__inputSearch"
            type="text" 
            placeholder="search"
          />
            <input 
            className="home__inputSort"
            placeholder="sort"
          />
        </div>
        </form>
      </div>
      <PubList />
    </div>
  )
}

export default Home