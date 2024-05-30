import { React, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./NavBar.scss";
import Cart from "../Cart/Cart";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              Posters
            </Link>
          </div>
          <div className="itemSeparator">|</div>
          <div className="item">
            <Link className="link" to="/products/2">
              Shadow Boxes
            </Link>
          </div>
          <div className="itemSeparator">|</div>
          <div className="item">
            <Link className="link" to="/products/3">
              3D Models
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            OZStore
          </Link>
        </div>
        <div className="right">
          <div className="icons">
            <SearchIcon />
            <AccountCircleIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Contact
            </Link>
          </div>
        </div>
      </div>
      {open && <Cart></Cart>}
    </div>
  );
};
