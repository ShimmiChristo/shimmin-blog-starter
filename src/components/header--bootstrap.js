/*
 ? Notes
 - using the bootstrap navigation (requires JS) made me download react-bootstrap
 - the bootstrap module was fine until I need JS/react functionality
*/

import React from "react"
import { v1 as uuidv1 } from "uuid"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Nav from "react-bootstrap/Nav"

import Offcanvas from "react-bootstrap/Offcanvas"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import "../styles/navigation.css"

const HeaderContainer = styled.header`
  .navbar-toggler {
    line-height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar-toggler-icon {
    height: 20px;
    width: 20px;
  }
`

function HeaderBootstrap(location) {
  const { title, nav, logo } = useSiteMetadata()
  let logoImg

  if (logo) {
    logoImg = (
      <Link to="/">
        <StaticImage
          src="../images/logo-black.jpg"
          alt="site logo"
          height={75}
          loading="eager"
          placeholder="blurred"
        />
      </Link>
    )
  } else {
    logoImg = <Link to="/">{title}</Link>
  }

  return (
    <HeaderContainer className="container py-lg-5 py-5 mb-3">
      <Navbar bg="light" fixed="top" expand="lg" className="d-flex-row">
        <div className="container-fluid">
          <div className="container-fluid d-lg-none">
            <div className="row">
              <div className="col-2 text-right justify-content-center align-items-center align-self-center">
                <Navbar.Toggle
                  bg="light"
                  expand="lg"
                  aria-controls="offcanvasNavbar"
                  className="d-lg-none"
                >
                  <FaBars />
                </Navbar.Toggle>
              </div>
              <div className="col-8 text-center">
                <Link to="/">
                  <span className="h2">{logoImg}</span>
                </Link>
              </div>
            </div>
          </div>

          <Nav className="container px-0 d-none d-lg-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Link to="/">
                <span className="h2 pe-3">{logoImg}</span>
              </Link>
              {nav.map(navMenu =>
                navMenu.subnav ? (
                  <NavDropdown
                    as="div"
                    title={navMenu.name}
                    id="basic-nav-dropdown"
                    key={uuidv1()}
                    className="me-2"
                  >
                    {navMenu.subnav.map(subNavMenu => (
                      <NavDropdown.Item as="div" key={uuidv1()}>
                        <Link className="d-block" to={subNavMenu.link}>
                          {subNavMenu.name}
                        </Link>
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link as="div">
                    <Link className="d-block" to={navMenu.link}>
                      {" "}
                      {navMenu.name}
                    </Link>
                  </Nav.Link>
                )
              )}
            </div>
            <div className="d-flex">
              <Link to="/sponsors">
                <button className="btn btn-outline-dark">Sponsors</button>
              </Link>
            </div>
          </Nav>

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <Link to="/">
                  <span className="h2">{logoImg}</span>
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
                {nav.map(navMenu =>
                  navMenu.subnav ? (
                    <NavDropdown
                      as="div"
                      title={navMenu.name}
                      id="basic-nav-dropdown"
                      key={uuidv1()}
                    >
                      {navMenu.subnav.map(subNavMenu => (
                        <NavDropdown.Item as="div" key={uuidv1()}>
                          <Link className="d-block" to={subNavMenu.link}>
                            {subNavMenu.name}
                          </Link>
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ) : (
                    <Nav.Link as="div">
                      <Link className="d-block" to={navMenu.link}>
                        {" "}
                        {navMenu.name}
                      </Link>
                    </Nav.Link>
                  )
                )}
              </Nav>
              <div className="d-flex mt-4">
                <Link to="/sponsors">
                  <button className="btn btn-outline-dark">Sponsors</button>
                </Link>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Navbar>
    </HeaderContainer>
  )
}

export default HeaderBootstrap
