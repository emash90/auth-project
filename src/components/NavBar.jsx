import React, { useEffect } from 'react'

const NavBar = ({ loggedInUser, onLogout }) => {
    const logout = () => {
        onLogout()  // set loggedInUser to null in parent component
        sessionStorage.clear()  // clear session storage
        window.location.href = '/'  // redirect to home page
    }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">React Auth</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            {loggedInUser ? ( 
                <>
                <a className="nav-link" href="/profile">Profile</a>
                <a className="nav-link" href="/users">Users</a>
                <a className="nav-link" href="/login" onClick={logout}>Logout</a>
                </>
            ) : (
                <>
                <a className="nav-link" href="/login">Login</a>
                <a className="nav-link" href="/register">Register</a>
                </>
            )}
            </div>
        </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar
