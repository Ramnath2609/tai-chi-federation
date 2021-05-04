import React from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import Home from "../../image/Home-white.svg";

const PureBreadcrumbs = ({ breadcrumbs }) => (
  breadcrumbs.length > 1 ? <div className="breadcrumbs">
    {
    breadcrumbs.length > 1 && breadcrumbs.map(({ breadcrumb, match }) => (
      <div className="breadcrumbsContent" key={match.url} title={breadcrumb.props.children}>
        <Link to={match.url || ""}>
          {
            breadcrumb.props.children === 'Home' ? <img className="homeIcon" src={Home} alt="home"/> : <span>{breadcrumb.props.children}</span>
          }
          </Link>
      </div>
    ))
    }
  </div> : ''
);

export default withBreadcrumbs()(PureBreadcrumbs);
