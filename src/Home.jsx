import React from 'react'
import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'

const Home = ({ loggedInUser, onLogout }) => {
  return (
    <>
    <NavBar loggedInUser={loggedInUser} onLogout={onLogout} />
      <h1>Home</h1>
     {loggedInUser && <h2>Welcome {loggedInUser.firstName}</h2>}
     <Link to='/users'>Users</Link>
    </>
  )
}

export default Home
