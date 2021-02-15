import React from "react";
// import { Link } from "react-router-dom";
import {
  faHome,
  faEquals,
  faChartLine,
  faCalendarAlt,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
// import logo from "../../../assets/logo192.png";
import Link from "../../link/Link";
import { Styledlist, StyledLi } from "./style";

const links = [
  { id: 1, to: "/", name: "Home", icon: faHome },
  { id: 2, to: "/workflow", name: "Workflow", icon: faEquals },
  {
    id: 3,
    to: "/statistics",
    name: "Statistics",
    icon: faChartLine,
  },
  { id: 4, to: "/calendar", name: "Calendar", icon: faCalendarAlt },
  { id: 5, to: "/users", name: "Users", icon: faUser },
  { id: 6, to: "/settings", name: "Settings", icon: faCog },
];

const Navbar = () => {
  return (
    <div>
      <Styledlist style={{ textDecoration: "none" }}>
        {links.map((link) => {
          return (
            <StyledLi key={link.id} style={{ textDecoration: "none" }}>
              <Link
                to={link.to}
                name={link.name}
                icon={link.icon}
                key={link.id}
              ></Link>
            </StyledLi>
          );
        })}
      </Styledlist>
    </div>
  );
};

export default Navbar;
