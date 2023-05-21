import React, { useState } from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { login } from './Api'

const Login = ({ onLogin }) => {
    const navigate = useNavigate()
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
        if(!email || !password){
            setMessage('Please fill in all fields')
            return
        }
        const user = {email, password}
        try {
          const response = await login(user)
          if(response.status === 200){
              console.log('successful login')
              setMessage(response.data.message)
              //set cookie
              //document.cookie = `token=${response.data.token}; path=/;`
              // document.cookie = `user=${JSON.stringify(response.data.user)}; path=/;`
              // console.log('cookie set', document.cookie)
              //sessionStorage.setItem('token', response.data.token)
              sessionStorage.setItem('user', JSON.stringify(response.data.user))
              console.log('sessionStorage set', sessionStorage)
              //set user in parent component
              const user = JSON.parse(sessionStorage.getItem('user'))
              onLogin(user)
              navigate('/')
          }
        } catch (error) {
          console.log('login failed')
          console.log(error)
          setMessage(error.response.data.message)
        }
    }
  return (
    <>
     <Container className="mt-5">
      <Row className="justify-content-md-center">
      <h2 className="text-center">Login</h2>
      {message && <div className="alert alert-warning col-md-6">{message}</div>}
      </Row>
      <Row className="justify-content-md-center">
      <Form className="col-md-6">
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" name='email' value={email} onChange={handleChange} placeholder="Enter email" />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" name='password' value={password} onChange={handleChange} placeholder="Password" />
        </Form.Group>

        {/* submit button */}
        <Button className='mt-3' variant="primary" onClick={(e) => submitForm(e) } type="submit">
          Submit
        </Button>

        {/* register link */}
        <Form.Text className="text-muted">
            Don't have an account? <Link to="/register">Register here</Link>
        </Form.Text>
      </Form>
      </Row>
      </Container>
    </>
  )
}

export default Login
