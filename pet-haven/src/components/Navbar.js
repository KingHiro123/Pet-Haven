// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { User, Menu } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const nav = useNavigate();
  const path = location.pathname;

  const [username, setUsername] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("pethavenLoggedInUser");
    if (saved) setUsername(saved);
  }, [path]);

  // close dropdowns on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const servicesActive =
    path.startsWith("/adopt") || path.startsWith("/release");

  const helpActive =
    path.startsWith("/volunteer") ||
    path.startsWith("/donate") ||
    path.startsWith("/membership");

  function logout() {
    localStorage.removeItem("pethavenLoggedInUser");
    setUsername(null);
    setShowUserMenu(false);
    setMobileOpen(false);
    nav("/login");
  }

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Brand */}
        <Link to="/" className="brand">
          Pet Haven
        </Link>

        {/* Main links (desktop only – hidden in CSS on small screens) */}
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

          {/* SERVICES */}
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

          {/* HELP US */}
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
                <NavLink to="/membership" className="dropdown-link">
                  Membership
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        {/* RIGHT SIDE – hamburger + user icon */}
        <div className="nav-right" ref={dropdownRef}>
          {/* Hamburger (shown only on small screens via CSS) */}
          <button
            className="nav-mobile-toggle"
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <Menu size={22} />
          </button>

          {/* User icon with dropdown */}
          <div className="nav-user">
            <button
              className="user-icon-btn"
              type="button"
              onClick={() => setShowUserMenu((v) => !v)}
            >
              <User size={22} />
            </button>

            {showUserMenu && (
              <div className="user-dropdown">
                {!username ? (
                  <>
                    <Link
                      to="/login"
                      className="user-dropdown-link"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="user-dropdown-link"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="user-dropdown-name">
                      Logged in as <strong>{username}</strong>
                    </p>
                    <button
                      className="user-dropdown-logout"
                      type="button"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU (shows when hamburger open) */}
      {mobileOpen && (
        <div className="mobile-menu">
          <NavLink to="/" className="mobile-menu-link" onClick={closeMobile}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="mobile-menu-link"
            onClick={closeMobile}
          >
            About
          </NavLink>
          <NavLink
            to="/gallery"
            className="mobile-menu-link"
            onClick={closeMobile}
          >
            Gallery
          </NavLink>

          <div className="mobile-menu-section-label">Services</div>
          <NavLink
            to="/adopt"
            className="mobile-menu-link"
            onClick={closeMobile}
          >
            Adopt
          </NavLink>
          <NavLink
            to="/release"
            className="mobile-menu-link"
            onClick={closeMobile}
          >
            Release a pet
          </NavLink>

          <div className="mobile-menu-section-label">Help us</div>
          <NavLink
            to="/volunteer"
            className="mobile-menu-link"
            onClick={closeMobile}
          >
            Volunteer
          </NavLink>
          <NavLink
            to="/membership"
            className="mobile-menu-link"
            onClick={closeMobile}
          >
            Membership
          </NavLink>
        </div>
      )}
    </nav>
  );
}

// import React, { useState, useEffect } from "react";
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import { User } from "lucide-react";

// export default function Navbar() {
//   const location = useLocation();
//   const nav = useNavigate();
//   const path = location.pathname;

//   // detect logged-in user
//   const [username, setUsername] = useState(null);
//   useEffect(() => {
//     const saved = localStorage.getItem("pethavenLoggedInUser");
//     if (saved) setUsername(saved);
//   }, [path]); // update when navigating

//   const servicesActive =
//     path.startsWith("/adopt") || path.startsWith("/release");
//   const helpActive =
//     path.startsWith("/volunteer") ||
//     path.startsWith("/donate") ||
//     path.startsWith("/membership");

//   const [showUserMenu, setShowUserMenu] = useState(false);

//   function logout() {
//     localStorage.removeItem("pethavenLoggedInUser");
//     setUsername(null);
//     setShowUserMenu(false);
//     nav("/login");
//   }

//   return (
//     <nav className="nav">
//       <div className="nav-inner">
//         {/* Brand */}
//         <Link to="/" className="brand">
//           Pet Haven
//         </Link>

//         {/* Main links */}
//         <ul className="links">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 "nav-link" + (isActive ? " active" : "")
//               }
//             >
//               Home
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 "nav-link" + (isActive ? " active" : "")
//               }
//             >
//               About
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/gallery"
//               className={({ isActive }) =>
//                 "nav-link" + (isActive ? " active" : "")
//               }
//             >
//               Gallery
//             </NavLink>
//           </li>

//           {/* SERVICES DROPDOWN */}
//           <li className="nav-item nav-item--dropdown">
//             <button
//               type="button"
//               className={
//                 "nav-link-button" +
//                 (servicesActive ? " nav-link-button--active" : "")
//               }
//             >
//               Services <span className="nav-arrow">▾</span>
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
//             <NavLink
//               to="/facilities"
//               className={({ isActive }) =>
//                 "nav-link" + (isActive ? " active" : "")
//               }
//             >
//               Facilities
//             </NavLink>
//           </li>

//           {/* HELP US */}
//           <li className="nav-item nav-item--dropdown">
//             <button
//               type="button"
//               className={
//                 "nav-link-button" +
//                 (helpActive ? " nav-link-button--active" : "")
//               }
//             >
//               Help us <span className="nav-arrow">▾</span>
//             </button>
//             <ul className="dropdown-menu">
//               <li>
//                 <NavLink to="/volunteer" className="dropdown-link">
//                   Volunteer
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

//         {/* RIGHT SIDE — USER ICON */}
//         <div className="nav-user">
//           <button
//             className="user-icon-btn"
//             onClick={() => {
//               if (!username) {
//                 nav("/login"); // go straight to auth page
//               } else {
//                 setShowUserMenu((v) => !v);
//               }
//             }}
//           >
//             <User size={22} />
//           </button>

//           {/* Dropdown when logged in */}
//           {username && showUserMenu && (
//             <div className="user-dropdown">
//               <p className="user-dropdown-name">
//                 Logged in as <strong>{username}</strong>
//               </p>

//               <button className="user-dropdown-logout" onClick={logout}>
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }
