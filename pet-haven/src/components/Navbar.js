// src/components/Navbar.jsx
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const servicesActive =
    path.startsWith("/adopt") || path.startsWith("/release");
  const helpActive =
    path.startsWith("/volunteer") ||
    path.startsWith("/donate") ||
    path.startsWith("/membership");

  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Brand */}
        <Link to="/" className="brand">
          Pet Haven
        </Link>

        {/* Main links */}
        <ul className="links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Gallery
            </NavLink>
          </li>

          {/* SERVICES DROPDOWN */}
          <li className="nav-item nav-item--dropdown">
            <button
              type="button"
              className={
                "nav-link-button" +
                (servicesActive ? " nav-link-button--active" : "")
              }
            >
              Services <span className="nav-arrow">▾</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/adopt" className="dropdown-link">
                  Adopt
                </NavLink>
              </li>
              <li>
                <NavLink to="/release" className="dropdown-link">
                  Release a pet
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/facilities"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Facilities
            </NavLink>
          </li>

          {/* HELP US DROPDOWN */}
          <li className="nav-item nav-item--dropdown">
            <button
              type="button"
              className={
                "nav-link-button" +
                (helpActive ? " nav-link-button--active" : "")
              }
            >
              Help us <span className="nav-arrow">▾</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/volunteer" className="dropdown-link">
                  Volunteer
                </NavLink>
              </li>
              <li>
                <NavLink to="/donate" className="dropdown-link">
                  Donate
                </NavLink>
              </li>
              <li>
                <NavLink to="/membership" className="dropdown-link">
                  Membership
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        {/* Right side – login */}
        <div className="auth">
          <NavLink to="/auth">Login</NavLink>
        </div>
      </div>
    </nav>
  );
}

// import React from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="nav">
//       <div className="nav-inner">
//         {/* Brand / logo */}
//         <Link to="/" className="brand">
//           Pet Heaven
//         </Link>

//         {/* Main navigation links */}
//         <ul className="links">
//           <li>
//             <NavLink to="/about" className="nav-link">
//               About
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/gallery" className="nav-link">
//               Gallery
//             </NavLink>
//           </li>

//           {/* SERVICES DROPDOWN */}
//           <li className="nav-item nav-item--dropdown">
//             <button type="button" className="nav-link-button">
//               Services
//             </button>
//             <ul className="dropdown-menu">
//               <li>
//                 <NavLink to="/adopt" className="dropdown-link">
//                   Adopt
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/release" className="dropdown-link">
//                   Release a pet
//                 </NavLink>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <NavLink to="/facilities" className="nav-link">
//               Facilities
//             </NavLink>
//           </li>

//           {/* HELP US DROPDOWN */}
//           <li className="nav-item nav-item--dropdown">
//             <button type="button" className="nav-link-button">
//               Help us
//             </button>
//             <ul className="dropdown-menu">
//               <li>
//                 <NavLink to="/volunteer" className="dropdown-link">
//                   Volunteer
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/donate" className="dropdown-link">
//                   Donate
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/membership" className="dropdown-link">
//                   Membership
//                 </NavLink>
//               </li>
//             </ul>
//           </li>
//         </ul>

//         {/* Right side – auth / login etc */}
//         <div className="auth">
//           <NavLink to="/login">Login</NavLink>
//           <NavLink to="/register" className="btn">
//             Register
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }
