import React from "react";
// import { Link } from "react-router-dom";
import Link from "../link/Link";
import logo from "../../assets/logo192.png";

// import { NAV_LINKS } from "../../utils/consts";

const links = [
  { id: 1, to: "/", name: "Home", icon: "home", src: logo },
  { id: 2, to: "/workflow", name: "Workflow", icon: "workflow", src: logo },
  {
    id: 3,
    to: "/statistics",
    name: "Statistics",
    icon: "statistics",
    src: logo,
  },
  { id: 4, to: "/calendar", name: "Calendar", icon: "calendar", src: logo },
  { id: 5, to: "/users", name: "Users", icon: "users", src: logo },
  { id: 5, to: "/settings", name: "Settings", icon: "settings", src: logo },
];

const Navbar = () => {
  return (
    <div>
      <ul style={{ textDecoration: "none" }}>
        {links.map((link) => {
          return (
            <li style={{ textDecoration: "none" }}>
              <Link
                to={link.to}
                name={link.name}
                icon={link.icon}
                key={link.id}
                src={link.src}
              ></Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
