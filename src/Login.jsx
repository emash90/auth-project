import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { login } from './Api'

const Login = () => {
    const user_details = {
        email: '',
        password: ''
    }
    const [values, setValues] = useState(user_details)
    const [message, setMessage] = useState(null) // for error message

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }
    const {email, password} = values

    const submitForm = async (e) => {
        e.preventDefault()
        console.log('submitting form...')
        const user = {email, password}
        const response = await login(user)
        if(response.status === 200){
            console.log(response.data)
            setMessage(response.data.message)
            //window.location.href = '/'
        } else {
            console.log('login failed')
            console.log(response.data)
            setMessage(response.data.message)
        }
    }
  return (
    <>
    <h2>Login</h2>
    {message && <div className="alert alert-warning">{message}</div>}
      <Form>
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
        <Button variant="primary" onClick={(e) => submitForm(e) } type="submit">
          Submit
        </Button>

        {/* register link */}
        <Form.Text className="text-muted">
            Don't have an account? <Link to="/register">Register here</Link>
        </Form.Text>
      </Form>
    </>
  )
}

export default Login
