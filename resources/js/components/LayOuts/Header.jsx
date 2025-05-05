import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link } from "@mui/material";
import gharayalogo from '../../assets/images/gharayalogo.png';

export const Header = () => {
  return (
    <div className="container-fluid sticky-top bg-white z-3">
      {/* Top Bar */}
      <div className="row bg-success bg-gradient text-white py-2 px-3">
        {/* Left side: Why Gharaya.Com */}
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center mb-2 mb-md-0 ps-md-4">
          <h6 className="mb-0 text-center text-md-start">Why Gharaya.Com</h6>
        </div>

        {/* Right side: About Us | Email | Contact Us */}
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center flex-wrap gap-2 pe-md-4 text-center text-md-end">
          <Grid item>
            <Link
              component={RouterLink}
              to="/loginpage"
              underline="hover"
              color="#fff"
              sx={{ fontSize: '0.9rem' }}
            >
              Login
            </Link>
          </Grid>
          <span className="text-white">|</span>
          <Grid item>
            <Link
              component={RouterLink}
              to="/about"
              underline="hover"
              color="#fff"
              sx={{ fontSize: '0.9rem' }}
            >
              About Us
            </Link>
          </Grid>
          <span className="text-white">|</span>
          <a
            className="text-white text-decoration-none"
            href="mailto:admin@desimati.com"
            style={{ fontSize: '0.9rem' }}
          >
            admin@desimati.com
          </a>
          <span className="text-white">|</span>
          <Grid item>
            <Link
              component={RouterLink}
              to="/contact"
              underline="hover"
              color="#fff"
              sx={{ fontSize: '0.9rem' }}
            >
              Contact Us
            </Link>
          </Grid>
        </div>
      </div>

      {/* Main Header */}
      <div className="headrshadow row rounded-bottom align-items-center py-3">
        {/* Left Side: Logo + Search */}
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <div className="d-flex align-items-center justify-content-center justify-content-md-start flex-wrap gap-3">
            <div className="custom-card shadow-sm p-2">
              <img src={gharayalogo} alt="Logo" className="img-fluid" style={{ maxHeight: "3.2rem" }} />
            </div>
            <input
              type="text"
              className="form-control flex-grow-1"
              placeholder="Search For Product"
              style={{ minWidth: "12.5rem", maxWidth: "19rem" }}
            />
          </div>
        </div>

        {/* Right Side: Dropdowns + Icons */}
        <div className="col-12 col-md-6">
          <div className="d-flex justify-content-center justify-content-md-end align-items-center flex-wrap gap-3">
            {/* Categories Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">All</a></li>
                <li><a className="dropdown-item" href="#">Vegetables</a></li>
                <li><a className="dropdown-item" href="#">Leafy</a></li>
                <li><a className="dropdown-item" href="#">Exotic Vegetable</a></li>
                <li><a className="dropdown-item" href="#">Fruits</a></li>
              </ul>
            </div>

            {/* Location Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Location
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Jabalpur</a></li>
                <li><a className="dropdown-item" href="#">Mumbai</a></li>
              </ul>
            </div>

            {/* User Icon */}
            <div className="text-center">
              <i className="bi bi-person fs-6"></i>
              <div className="small">User</div>
            </div>

            {/* Cart Icon */}
            <div className="text-center">
              <i className="bi bi-cart fs-6"></i>
              <div className="small">My Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
