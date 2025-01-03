import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const ResultsPage = () => {
  const location = useLocation();
  const result = location.state;

  if (!result) {
    return <div>Error: Hasil tidak ditemukan.</div>;
  }

  return (
    <div className="w-full min-h-[90dvh] flex flex-col items-center bg-gray-100 py-8">
      <div className="w-[90%] max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">Hasil Tes</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Role yang Cocok untuk Anda:</h2>
          <p className="text-lg mt-4">{result.role}</p>
          <p className="mt-4">{result.description}</p>
          <p className="mt-4 text-gray-500">Akurasi: {result.accuracy}%</p>
        </div>
        <div className="mt-6 space-x-4">
          <NavLink
            to="/questions"
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
          >
            Kembali ke pertanyaan
          </NavLink>
          <NavLink
            to="/"
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Kembali ke Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
