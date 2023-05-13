import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';


const App = () => {
  return (
    <>
      <div className="App">
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                  </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default App

