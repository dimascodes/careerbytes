import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import Button from "@mui/material/Button";
import gambar from "../assets/images/e1.png";
import Loading from "./Loading.js"; // Pastikan path sesuai

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleStartTest = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/Questions");
    }, 6500);
  };

  return (
    <div className={styles.home}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center text-center h-[50dvh] justify-evenly">
          <section className={styles.box}>
            <h1 className="text-6xl pb-3">
              "Cari Tahu karirmu melalui kepribadianmu"
            </h1>
            <p className="text-xl">
              Hanya perlu beberapa menit untuk mendapatkan gambaran yang
              “akurat” tentang siapa Anda dan mengapa Anda melakukan sesuatu
              dengan cara Anda.
            </p>
          </section>
          <Button
            variant="contained"
            sx={{ borderRadius: 16 }}
            onClick={handleStartTest}
          >
            Mulai Tes{" "}
          </Button>
          <div>
            <img src={gambar} alt="apalah" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
