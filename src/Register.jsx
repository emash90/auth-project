import React from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { signup } from './Api'

const Register = () => {
    const user_details = {
        firstName: '',
        lastName: '',
        username: '',
        role: '',
        email: '',
        password: ''
    }
    const [values, setValues] = useState(user_details)
    const [message, setMessage] = useState(null) // for error message
    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }
    const {firstName, lastName,username, role, email, password} = values


    

    const submitForm = async (e) => {
        e.preventDefault()
        console.log('submitting form...')
        console.log(firstName, lastName, email, password)
        const user = {firstName, lastName, username, role, email, password}
        try {
          const response = await signup(user)
          if(response.status === 200){
              console.log('successful signup')
              setMessage(response.data.message)
              window.location.href = '/login'
          }
        } catch (error) {
          console.log('signup failed')
          setMessage(error.response.data.message)
        }
    }


  return (
    <>
    <Container className="mt-2">
      <Row className="justify-content-md-center">
    <h2 className="text-center">Register</h2>
    {message && <div className="alert alert-warning">{message}</div>}
      </Row>
      <Row className="justify-content-md-center">
      <Form className="col-md-8">
        {/* name */}
        <Form.Group controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name='firstName' value={firstName} onChange={handleChange} placeholder="Enter first name" />
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name='lastName' value={lastName} onChange={handleChange} placeholder="Enter last name" />
        </Form.Group>
        
        {/*username*/}
        <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name='username' value={username} onChange={handleChange} placeholder="Enter username" />
        </Form.Group>
        
        {/*role*/}
        <Form.Group controlId="formBasicRole">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" name='role' value={role} onChange={handleChange} placeholder="Enter role" />
        </Form.Group>

        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' value={email} onChange={handleChange} placeholder="Enter email" />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' value={password} onChange={handleChange} placeholder="Password" />
        </Form.Group>

        {/* submit button */}
        <Button className='mt-3' variant="primary" type="submit" onClick={(e) => submitForm(e)}>
          Submit
        </Button>

        {/* login link */}
        <Form.Text className="text-muted">
            Already have an account? <Link to="/login">Login</Link>
        </Form.Text>
      </Form>
      </Row>
    </Container>
    </>
  )
}

export default Register