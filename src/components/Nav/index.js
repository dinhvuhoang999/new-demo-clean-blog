import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [open, SetOpen] = useState(false);
  const [navscroll, SetNavscroll] = useState(false);

  function onclicknav() {
    SetOpen(!open);
    console.log(open);
  }

  function onscrollnav() {
    if (window.scrollY >= 80) {
      SetNavscroll(true);
    } else {
      SetNavscroll(false);
    }
  }

  window.addEventListener('scroll', onscrollnav);
  return (
    <>
      <nav
        className={
          navscroll
            ? 'navbar navbar-expand-lg navbar-light position-fixed nav-active'
            : 'navbar navbar-expand-lg navbar-light position-fixed'
        }
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            Start Bootstrap
          </Link>
          <button
            onClick={onclicknav}
            className={open ? 'navbar-toggler' : 'navbar-toggler collapsed'}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={
              open
                ? 'navbar-collapse collapse show'
                : 'navbar-collapse collapse'
            }
            id="navbarResponsive"
          >
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-lg-3 py-3 py-lg-4"
                  to="/SamplePost/f36121ec-05f7-4a1e-8d59-f3d3bccd45ba"
                >
                  SAMLEPOSTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/Contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
