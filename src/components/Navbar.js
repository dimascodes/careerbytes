import React, { useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Burger from "./Burger";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className="brand flex flex-row items-center text-3xl">
        <NavLink to="/">CareerBytes</NavLink>
      </div>
      <button className={styles.burgerButton} onClick={toggleBurger}>
        ☰
      </button>
      {burgerOpen && <Burger onClose={toggleBurger} />}
    </nav>
  );
};

export default Navbar;
