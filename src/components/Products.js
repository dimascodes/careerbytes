import React, { useState } from "react";
import Icon1 from "../assets/images/icon1.png";
import Icon2 from "../assets/images/icon2.png";
import Icon3 from "../assets/images/icon3.png";

const QuestionCard = ({ question, onAnswer, index }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-6">Pertanyaan {index + 1}</h2>
      <p className="text-lg mb-8">{question.text}</p>

      <div className="flex justify-center space-x-16">
        <button
          onClick={() => onAnswer(question.id, true)}
          className="flex flex-col items-center space-y-2 focus:outline-none"
        >
          <div
            className={`w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-50 ${
              question.answer === true ? "bg-green-500" : ""
            }`}
          >
            {question.answer === true && (
              <div className="w-6 h-6 bg-white rounded-full" />
            )}
          </div>
          <span className="text-green-500">YA</span>
        </button>

        <button
          onClick={() => onAnswer(question.id, false)}
          className="flex flex-col items-center space-y-2 focus:outline-none"
        >
          <div
            className={`w-12 h-12 rounded-full border-2 border-purple-500 flex items-center justify-center hover:bg-purple-50 ${
              question.answer === false ? "bg-purple-500" : ""
            }`}
          >
            {question.answer === false && (
              <div className="w-6 h-6 bg-white rounded-full" />
            )}
          </div>
          <span className="text-purple-500">TIDAK</span>
        </button>
      </div>
    </div>
  );
};

const Questions = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "Apakah anda menguasai bahasa pemrograman Python?",
      answer: null,
    },
    {
      id: 2,
      text: "Apakah anda menguasai bahasa pemrograman Java?",
      answer: null,
    },
    {
      id: 3,
      text: "Apakah anda menguasai bahasa pemrograman C++?",
      answer: null,
    },
    {
      id: 4,
      text: "apakah anda menguasai bahasa pemrograman javascript?",
      answer: null,
    },
    {
      id: 5,
      text: "apaakah anda cina?",
      answer: null,
    },
    {
      id: 6,
      text: "apakah anda menguasai bahasa jawa?",
      answer: null,
    },
    {
      id: 7,
      text: "apakah anda menguasai bahasa pemrograman kotlin?",
      answer: null,
    },
    {
      id: 8,
      text: "apakah anda menguasai linux administrator?",
      answer: null,
    },
  ]);

  const [showDialog, setShowDialog] = useState(false);

  const handleAnswer = (questionId, answer) => {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, answer } : q)),
    );
  };

  const checkAnswers = () => {
    return questions.every((q) => q.answer !== null);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://8.215.100.141:8888/api/submit-answers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ answers: questions }),
        },
      );

      if (response.ok) {
        const result = await response.json();
        if (result && result.id) {
          window.location.href = `/results/${result.id}`;
        } else {
          throw new Error("ID tidak ditemukan dalam hasil.");
        }
      } else {
        throw new Error("Gagal mengirim jawaban.");
      }
    } catch (error) {
      console.error("Error submitting answers:", error);
      alert("Terjadi kesalahan saat mengirim jawaban. Silakan coba lagi.");
    }
  };

  return (
    <div className="w-full min-h-[90dvh] flex flex-col items-center bg-gray-100 py-8">
      <div className="w-[90%] max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">
          Jawab Beberapa Pertanyaan Berikut
        </h1>

        <div className="bg-blue-200 p-6 rounded-lg shadow-md mb-7">
          <div className="flex items-start mb-4">
            <img src={Icon1} alt="Icon 1" className="w-14 h-14 mr-4" />
            <p className="text-gray-700 text-lg word-spacing-[2rem]">
              Jadilah diri Anda sepenuhnya dan beri jawaban sejujurnya untuk
              mengetahui tipe kepribadian Anda.
            </p>
          </div>

          <div className="flex items-start mb-4">
            <img src={Icon2} alt="Icon 2" className="w-12 h-12 mr-4" />
            <p className="text-gray-700">
              Pelajari cara tipe kepribadian Anda memengaruhi banyak aspek dalam
              hidup Anda.
            </p>
          </div>

          <div className="flex items-start">
            <img src={Icon3} alt="Icon 3" className="w-12 h-12 mr-4" />
            <p className="text-gray-700 mb-8">
              Berkembanglah menjadi pribadi yang Anda inginkan dengan berbagai
              materi premium opsional kami.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          {questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              onAnswer={handleAnswer}
              index={index}
            />
          ))}
        </div>

        <button
          onClick={() => setShowDialog(true)}
          className="w-full bg-purple-500 text-white rounded-lg py-4 mt-8 hover:bg-purple-600 transition-colors"
        >
          Akhiri sesi pertanyaan ini
        </button>

        {showDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <p className="text-gray-600 mb-4">
                {checkAnswers()
                  ? "SIP MANTAPP SERATUSSSS, Semua pertanyaan telah dijawab. Apakah Anda ingin mengirim jawaban?"
                  : "Masih ada pertanyaan yang belum dijawab masbro. Harap lengkapi semua pertanyaannya."}
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowDialog(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Belum
                </button>
                {checkAnswers() && (
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
                  >
                    Sudah
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;
