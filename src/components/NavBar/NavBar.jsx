import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link class="link" to="/products/1">
              Posters
            </Link>
          </div>
          <div className="item">
            <Link class="link" to="/products/2">
              Shadow Boxes
            </Link>
          </div>
          <div className="item">
            <Link class="link" to="/products/3">
              3D Models
            </Link>
          </div>
        </div>
        <div className="center">
          <Link class="link" to="/">
            OZStore
          </Link>
        </div>
        <div className="right">
          <div className="icons">
            <SearchIcon />
            <AccountCircleIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
          <div className="item">
            <Link class="link" to="/products/3">
              About
            </Link>
          </div>
          <div className="item">
            <Link class="link" to="/products/3">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};