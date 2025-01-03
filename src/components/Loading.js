import React, { useState, useEffect } from "react";
import { Roller } from "react-awesome-spinners";

const Loading = () => {
  const [loadingText, setLoadingText] = useState("Loading");
  const loadingMessages = [
    "Loading",
    "Tunggu ya",
    "Sebentar lagi",
    "selamat tahun baru 🤩",
    "ppn 12%",
    "kamu orang yang sabar",
    "menjadi orang sabar adalah ....",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % loadingMessages.length;
      setLoadingText(loadingMessages[index]);
    }, 1000); // Ganti teks setiap 1 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  return (
    <div className="w-full h-[90dvh] flex flex-row items-center justify-center">
      <p className="text-white text-5xl pr-6 font-bold">{loadingText}</p>
      <Roller />
    </div>
  );
};

export default Loading;
