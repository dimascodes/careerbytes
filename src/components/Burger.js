import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Burger.module.css";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Burger = ({ onClose }) => {
  return (
    <div className={styles.burgerMenu}>
      <div className={styles.closeButton}>
        <IconButton onClick={onClose}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
      <button className={styles.startTest}>
        <NavLink to="/Questions">Mulai Tes</NavLink>
      </button>
      <button className={styles.startTest}>
        <NavLink to="/">home</NavLink>
      </button>

      <ul className={styles.menuList}>
        <li>Tes Kepribadian Gratis</li>
        <li>Tipe Kepribadian</li>
        <li>Bahasa</li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Tentang Kami
          </NavLink>
        </li>
      </ul>
      <div className={styles.searchWrapper}>
        <input type="text" placeholder="Pencarian" />
      </div>
      <div className={styles.loginButtons}>
        <button>Masuk</button>
        <button>Masuk sebagai Admin</button>
      </div>
    </div>
  );
};

export default Burger;
