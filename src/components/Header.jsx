import { NavLink } from "react-router-dom";
// import Styles from "./Header.module.css";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
        <span>THE COMPANY</span>

        <ul className="header_nav">
            <li>
                <NavLink to = "/">Home</NavLink>
            </li>
            <li>
                <NavLink to = "/users">Users</NavLink>
            </li>
            <li>
                <NavLink to = "/blog">Blog</NavLink>
            </li>
            <li>
                <NavLink to = "/register">Register</NavLink>
            </li>
        </ul>
    </div>
  )
}
