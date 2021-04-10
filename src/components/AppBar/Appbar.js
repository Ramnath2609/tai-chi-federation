import React from 'react';
import { Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, Route } from "react-router-dom";
import Home from "../home/home";
import whatIsTaiChi from "../What-Is-Tai-Chi/what-is-Tai-Chi";
import HistoryofYangsFamily from "../History-of-Yang's-Family/History-of-Yang's-Family";
import YangTaiji from "../Yang-Taiji/Yang-Taiji";
import BenefitsOfTaijiQuan from "../Benefits-of-Taiji-Quan/Benefits-of-Taiji-Quan";
import Testimonials from "../Testimonials/Testimonials";
import PhotoGallery from "../Photo-Gallery/Photo-Gallery";
import ContactUS from "../Contact-Us/Contact-Us";

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
              <NavLink>Tai Chi Federation of India</NavLink>
            </Link>
          </div>

          <Collapse navbar className='collapse navbar-collapse' id='Mobile-view-navbar-collapse'>
            <Nav className="nav navbar-nav navbar-right" navbar >
              <NavItem>
                <Link className="header-links" to="/whatIsTaiChi">
                  <NavLink>What is Tai Chi</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link className="header-links" to="/historyofYangsFamily">
                  <NavLink>History of Yang's Family Taiji Quan</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link className="header-links" to="/yangTaiji">
                  <NavLink>Yang Taiji Quan In India</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link className="header-links" to="/benefitsOfTaijiQuan">
                  <NavLink>Benefits of Taiji Quan</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link className="header-links" to="/testimonials">
                  <NavLink>Testimonials</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link className="header-links" to="/photoGallery">
                  <NavLink>Photo Gallery</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link className="header-links" to="/contactus">
                  <NavLink>Contact Us</NavLink>
                </Link>
              </NavItem>

            </Nav>
          </Collapse>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route exact path="/whatIsTaiChi" component={whatIsTaiChi} />
      <Route exact path="/historyofYangsFamily" component={HistoryofYangsFamily} />
      <Route exact path="/yangTaiji" component={YangTaiji} />
      <Route exact path="/benefitsOfTaijiQuan" component={BenefitsOfTaijiQuan} />
      <Route exact path="/testimonials" component={Testimonials} />
      <Route exact path="/photoGallery" component={PhotoGallery} />
      <Route exact path="/contactus" component={ContactUS} />
    </>
  )
}

export default Appbar;