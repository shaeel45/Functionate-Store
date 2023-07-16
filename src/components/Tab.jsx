import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import './nav.css'
const Tab = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
    <nav>
      <div className='d-flex justify-content-between'>
        <li className="nav-item">
            <NavLink
              exact to ="/"
              className="nav-links"
              onClick={handleClick}
            >
              Computers
            </NavLink>
        </li>
          <li className="nav-item">
            <NavLink
              exact to="/"
              className="nav-links"
              onClick={handleClick}
            >
              Computers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact to="/"
              className="nav-links"
              onClick={handleClick}
            >
              Computers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact to="/"
              className="nav-links"
              onClick={handleClick}
            >
              Computers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact to="/"
              className="nav-links"
              onClick={handleClick}
            >
              Computers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact to="/"
              className="nav-links"
              onClick={handleClick}
            >
              Computers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact to="/"
              className="nav-links"
              onClick={handleClick}
            >
              Computers
            </NavLink>
          </li>
      </div>
    </nav>
    </>
  )
}

export default Tab