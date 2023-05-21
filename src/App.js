import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import { useEffect, useState } from 'react';


const App = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setLoggedInUser(foundUser);
    } else {
      setLoggedInUser(null);
    }
  }, []);

  const handleLogin = (user) => {
    setLoggedInUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    sessionStorage.removeItem("user");
    navigate("/login");
  };


  return (
    <>
      <div className="App">
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/" element={<Home loggedInUser={loggedInUser} onLogout={handleLogout}  />} />
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

