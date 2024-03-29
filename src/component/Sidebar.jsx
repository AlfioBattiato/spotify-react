import React, { useState } from 'react';
import { Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { getFetchAction } from '../redux/action/index'
const Sidebar = () => {

  const dispatch = useDispatch();
  const [artist, setArtist] = useState("")


  const handleChange = ((e) => {
    setArtist(e.target.value)


  })
  const search = (e) => {
    e.preventDefault()
    console.log(artist)
    dispatch(getFetchAction(artist))

  }

  return (
    <Col xs={2} className="col-2">
      <Navbar expand="md" fixed="left" className="justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img
              src="assets/logo/logo.png"
              alt="Spotify Logo"
              width="131"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav">
              <ul className=''>
                <li>
                  <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Nav.Link>
                </li>
                <li>
                  <Form className="input-group mt-3" onSubmit={search}>
                    <FormControl
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <Button
                        variant="outline-secondary"
                        className="btn-sm h-100"
                        type="submit"
                      >
                        GO
                      </Button>
                    </div>
                  </Form>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="nav-btn ">
          <Button variant="light" className="signup-btn rounded-pill" type="button">Sign Up</Button>
          <Button variant="black" className="login-btn rounded-pill" type="button">Login</Button>
          <p className='m-0'> <a href="#/">Cookie Policy</a> |<a href="#/"> Privacy</a> </p>

        </div>
      </Navbar>
    </Col>
  );
};

export default Sidebar;
