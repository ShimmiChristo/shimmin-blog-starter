/*
 ? Notes
 - using the bootstrap navigation (requires JS) made me download react-bootstrap
 - the bootstrap module was fine until I need JS/react functionality
*/

import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Offcanvas from "react-bootstrap/Offcanvas"
import Img from "gatsby-image"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"

const HeaderContainer = styled.header`
  border-bottom: 1px solid #ebebeb;

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
const CustomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 2;
  padding: 0;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;

    li {
      margin: 0;
      list-style: none;
      padding-left: 1rem;
    }
  }
`

const Background = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
    display: none;

    &.active {
      opacity: 1;
      display: block;
    }
  }
`

function HeaderBootstrap(location) {
  const { title, nav, logo } = useSiteMetadata()
  const [menuActive, setMenuActive] = useState(false)
  const [subMenuActive, setSubMenuActive] = useState(false)

  let logoImg

  if (logo) {
    logoImg = (
      <Link to="/">
        <StaticImage
          src="../images/logo-black.png"
          alt="site logo"
          height={75}
        />
      </Link>
    )
  } else {
    logoImg = <Link to="/">{title}</Link>
  }

  return (
    <HeaderContainer className="container py-lg-5 py-5 mb-3">
      {/* <Background className={`${menuActive ? 'active' : ''}`}></Background> */}
      {/* <CustomContainer> */}
        {/* <ContainerLower> */}
        <Navbar bg="light" fixed="top" expand="lg" className="px-0 ">


          <div className="container ">
            <Link to="/">
              <span className="h2">{logoImg}</span>
            </Link>
          </div>
          <Container>
            <Navbar.Toggle bg="light" expand="lg" aria-controls="offcanvasNavbar">
              <FaBars />
            </Navbar.Toggle>

            <Nav className="container-fluid px-0 d-none d-lg-flex ">
              <div className="d-flex">
                {nav.map(navMenu =>
                  navMenu.subnav ? (
                    <NavDropdown
                      as="div"
                      title={navMenu.name}
                      id="basic-nav-dropdown"
                      key={navMenu.name}
                      className="me-2"
                    >
                      {navMenu.subnav.map(subNavMenu => (
                        <NavDropdown.Item as="div" key={subNavMenu.name}>
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
                        key={navMenu.name}
                      >
                        {navMenu.subnav.map(subNavMenu => (
                          <NavDropdown.Item as="div" key={subNavMenu.name}>
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
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        {/* </ContainerLower> */}
      {/* </CustomContainer> */}
    </HeaderContainer>
  )
}

export default HeaderBootstrap
