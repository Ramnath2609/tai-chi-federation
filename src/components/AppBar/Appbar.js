import React from 'react';
import { Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link, Route } from "react-router-dom";
import Home from "../home/home";
import whatIsTaiChi from "../What-Is-Tai-Chi/what-is-Tai-Chi";
import HistoryofYangsFamily from "../History-of-Yang's-Family/History-of-Yang's-Family";
import YangTaiji from "../Yang-Taiji/Yang-Taiji";
import BenefitsOfTaijiQuan from "../Benefits-of-Taiji-Quan/Benefits-of-Taiji-Quan";
import Testimonials from "../Testimonials/Testimonials";
import PhotoGallery from "../Photo-Gallery/Photo-Gallery";
import ContactUS from "../Contact-Us/Contact-Us";
import DownArrow from "../../image/drop-down-arrow.svg"
import "../componentStyles.css";

const Appbar = () => {
  return (
    <>
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#Mobile-view-navbar-collapse'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link className="header-links navbar-brand page-scroll" to="/">
              <NavLink className="header-title" href="/">Tai Chi Federation of India</NavLink>
            </Link>
          </div>

          <Collapse navbar className='collapse navbar-collapse' id='Mobile-view-navbar-collapse'>
            <Nav className="nav navbar-nav navbar-right" navbar >
              <NavItem>
                <Link className="header-links" to="/">
                  <NavLink>Home</NavLink>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="dropdown-nav">
                <DropdownToggle nav caret>
                  Taiji Quan 
                  <img alt="dropdownarrow" src={DownArrow} className="dropdown-arrow"/>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link className="header-dropdown-links" to="/history-of-yangs-family">
                        <NavLink>History of Yang's Family Taiji Quan</NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="header-dropdown-links" to="/yang-taiji-quan-in-india">
                      <NavLink>Yang Taiji Quan In India</NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="header-dropdown-links" to="/benefits-of-taiji-quan">
                      <NavLink>Benefits of Taiji Quan</NavLink>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavItem>
                <Link className="header-links" to="/history-of-yangs-family">
                  <NavLink>History of Yang's Family Taiji Quan</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link className="header-links" to="/yang-taiji-quan-in-india">
                  <NavLink>Yang Taiji Quan In India</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link className="header-links" to="/benefits-of-taiji-quan">
                  <NavLink>Benefits of Taiji Quan</NavLink>
                </Link>
              </NavItem> */}

              <NavItem>
                <Link className="header-links" to="/testimonials">
                  <NavLink>Testimonials</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link className="header-links" to="/gallery">
                  <NavLink>Gallery</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link className="header-links" to="/contact-us">
                  <NavLink>Contact Us</NavLink>
                </Link>
              </NavItem>

            </Nav>
          </Collapse>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route exact path="/what-is-tai-chi" component={whatIsTaiChi} />
      <Route exact path="/history-of-yangs-yamily" component={HistoryofYangsFamily} />
      <Route exact path="/yang-taiji-quan-in-india" component={YangTaiji} />
      <Route exact path="/benefits-of-taiji-quan" component={BenefitsOfTaijiQuan} />
      <Route exact path="/testimonials" component={Testimonials} />
      <Route exact path="/gallery" component={PhotoGallery} />
      <Route exact path="/contact-us" component={ContactUS} />
    </>
  )
}

export default Appbar;