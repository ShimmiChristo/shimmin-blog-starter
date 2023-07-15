import React, { useState } from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit"

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FaBars } from "react-icons/fa";
import "../styles/navigation.css"

const HeaderContainer = styled.header`
  border-bottom: 1px solid #ebebeb;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  z-index: 2;
  padding: 0 2.5rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`
const Nav = styled.nav`
  margin: 0 2rem;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;

    li {
      padding: 0 1rem;
      margin: 0;
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    margin: 0;
    max-width: 250px;
    min-width: 150px;
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 2;
    transform: translateX(-100%);
    -webkit-transition: -webkit-transform 0.3s ease 0s;
    transition: -webkit-transform 0.3s ease 0s;
    transition: transform 0.3s ease 0s;
    transition: transform 0.3s ease 0s, -webkit-transform 0.3s ease 0s;
    overflow-x: hidden;

    &.active {
      transform: translateX(0);
    }
    ul {
      margin: 0;
      flex-direction: column;
      padding: 2rem 1rem 1rem 1rem;

      li {
        border-bottom: 1px solid;
        padding: 1rem 0;
        margin: 0;
        text-align: left;
      }
    }
  }
`
const NavBtn = styled.span`
  display: none;
  @media (max-width: 767px) {
    display: block;
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: #fff;
    padding: 0.5rem;
    z-index: 2;

    &:hover {
      cursor: pointer;
      cursor: hand;
    }
  }
`
const CloseBtn = styled.span`
  display: none;
  @media (max-width: 767px) {
    display: block;
    position: absolute;
    top: 0.5rem;
    right: 1rem;

    &:hover {
      cursor: pointer;
      cursor: hand;
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

function HeaderV3() {
  const { title, nav, logo } = useSiteMetadata()
  const [menuActive, setMenuActive] = useState(false)
  const [showBasic, setShowBasic] = useState(false)

  let logoImg

  if (logo) {
    logoImg = (
      <Link to="/">
        <StaticImage
          src="../images/logo-black.jpg"
          alt="site logo"
          height={75}
        />
      </Link>
    )
  } else {
    logoImg = <Link to="/">{title}</Link>
  }

  function navClick() {
    const bodyTag = document.getElementsByTagName("body")[0]
    if (menuActive) {
      bodyTag.classList.remove("no-scroll")
      setMenuActive(false)
    } else {
      bodyTag.classList.add("no-scroll")
      setMenuActive(true)
    }
  }

  return (
    <MDBNavbar expand="lg" light bgColor="light" className="sticky-top">
      <MDBContainer>
        <MDBNavbarBrand href="#">{logoImg}</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        {/* <MDBCollapse navbar show={showBasic}> */}

        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 justify-content-end">
          {nav.map(navItem => (
            <>
              {navItem.subnav ? (
                navItem.subnav.map(subnavItem => (
                  <MDBNavbarItem>
                    <MDBDropdown>
                      <MDBDropdownToggle tag="a" className="nav-link">
                        {navItem.name}
                      </MDBDropdownToggle>

                      <MDBDropdownMenu>
                        <MDBDropdownItem>
                          <Link className="dropdown-item" to={subnavItem.link}>
                            {subnavItem.name}
                          </Link>
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavbarItem>
                ))
              ) : (
                <MDBNavbarItem>
                  <Link className="dropdown-item" to={navItem.link}>
                    {navItem.name}
                  </Link>
                </MDBNavbarItem>
              )}
            </>
          ))}
        </MDBNavbarNav>
        {/* </MDBCollapse> */}
      </MDBContainer>
    </MDBNavbar>
  )
}

export default HeaderV3
