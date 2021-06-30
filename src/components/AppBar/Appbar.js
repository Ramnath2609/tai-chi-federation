import React from 'react';
import { Collapse, Nav, NavItem, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Route, Switch, NavLink } from "react-router-dom";
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
import Logo from "../../image/Logo/Taichi_Logo.png";
import Breadcrumb from "../BreadCrumb/breadCrumb";
import HomeIcon from "../../image/MenuIcons/home-white.svg";
import TestimonialsIcon from "../../image/MenuIcons/testimonial-white.svg";
import PhotoGalleryIcon from "../../image/MenuIcons/photo-gallery-white.svg";
import ContactUsIcon from "../../image/MenuIcons/contactUs-white.svg";
import TaichiQuanIcon from "../../image/MenuIcons/Taichi-white.svg";
import { useMediaQuery } from 'react-responsive';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const Appbar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
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
            <div className="header-links navbar-brand page-scroll">
              <img className="taichiLogo" src={Logo} alt="logo" />
              Tai Chi Federation of India
            </div>
          </div>

          <Collapse navbar className='collapse navbar-collapse' id='Mobile-view-navbar-collapse'>
            <Nav className="nav navbar-nav navbar-right" navbar >
              <NavItem>
                <NavLink exact activeClassName="active" className="header-links" to="/">
                  <img className="Homeicon" src={HomeIcon} alt="HomeIcon" />
                  <span className="IconText">Home</span>
                </NavLink>
              </NavItem>
              {
                isMobile ? <NavItem>
                  <Accordion allowZeroExpanded={true}>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <img className="TestimonialsIcon" src={TaichiQuanIcon} alt="TaichiQuanIcon" />
                          <span className="IconText">Taiji Quan</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div>
                          <NavLink exact activeClassName="active" className="header-dropdown-links" to="/history-of-yangs-family">
                            History of Yang's Family Taiji Quan
                          </NavLink>
                        </div>
                        <div>
                          <NavLink exact activeClassName="active" className="header-dropdown-links" to="/yang-taiji-quan-in-india">
                            Yang Taiji Quan In India
                          </NavLink>
                        </div>
                        <div>
                          <NavLink exact activeClassName="active" className="header-dropdown-links" to="/benefits-of-taiji-quan">
                            Benefits of Taiji Quan
                          </NavLink>
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </NavItem> : <UncontrolledDropdown nav inNavbar className="dropdown-nav">
                  <DropdownToggle nav caret>
                    <img className="TestimonialsIcon" src={TaichiQuanIcon} alt="TaichiQuanIcon" />
                    <span className="IconText">Taiji Quan</span>
                    <img alt="dropdownarrow" src={DownArrow} className="dropdown-arrow" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink exact activeClassName="active" className="header-dropdown-links" to="/history-of-yangs-family">
                        History of Yang's Family Taiji Quan
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink exact activeClassName="active" className="header-dropdown-links" to="/yang-taiji-quan-in-india">
                        Yang Taiji Quan In India
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink exact activeClassName="active" className="header-dropdown-links" to="/benefits-of-taiji-quan">
                        Benefits of Taiji Quan
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              }

              <NavItem>
                <NavLink exact activeClassName="active" className="header-links" to="/testimonials">
                  <img src={TestimonialsIcon} className="TestimonialsIcon" alt="TestimonialsIcon" />
                  <span className="IconText">Testimonials</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink exact activeClassName="active" className="header-links" to="/gallery">
                  <img src={PhotoGalleryIcon} className="TestimonialsIcon" alt="PhotoGalleryIcon" />
                  <span className="IconText">Gallery</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink exact activeClassName="active" className="header-links" to="/contact-us">
                  <img src={ContactUsIcon} className="TestimonialsIcon" alt="PhotoGalleryIcon" />
                  <span className="IconText"> Contact Us</span>
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </div>
      </nav>

      <Breadcrumb />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/what-is-tai-chi" component={whatIsTaiChi} />
        <Route exact path="/history-of-yangs-family" component={HistoryofYangsFamily} />
        <Route exact path="/yang-taiji-quan-in-india" component={YangTaiji} />
        <Route exact path="/benefits-of-taiji-quan" component={BenefitsOfTaijiQuan} />
        <Route exact path="/testimonials" component={Testimonials} />
        <Route exact path="/gallery" component={PhotoGallery} />
        <Route exact path="/contact-us" component={ContactUS} />
      </Switch>
    </>
  )
}

export default Appbar;