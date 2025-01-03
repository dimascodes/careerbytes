import React, { useState } from "react";
import QuestionCard from "./QuestionsCard";
import Icon1 from "../assets/images/icon1.png";
import Icon2 from "../assets/images/icon2.png";
import Icon3 from "../assets/images/icon3.png";
import { useNavigate } from "react-router-dom";
import { matchJobRole } from "./matchLogic";

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
    {
      id: 9,
      text: "Apakah anda menguasai bahasa pemrograman SQL?",
      answer: null,
    },
    { id: 10, text: "Apakah anda memiliki pemahaman statistik?", answer: null },
    {
      id: 11,
      text: "Apakah anda memiliki pemahaman tentang css?",
      answer: null,
    },
    {
      id: 12,
      text: "Apakah anda memiliki pengetahuan tentang html?",
      answer: null,
    },
    { id: 13, text: "Apakah anda paham tentang node js?", answer: null },
    { id: 14, text: "Apakah anda memiliki pemahaman statistik?", answer: null },
    {
      id: 15,
      text: "Apakah anda memiliki pemahaman tntang blender?",
      answer: null,
    },
    { id: 16, text: "Apakah anda memiliki pemahaman animasi?", answer: null },
  ]);

  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (questionId, answer) => {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, answer } : q)),
    );
  };

  const checkAnswers = () => {
    return questions.every((q) => q.answer !== null);
  };

  const handleSubmit = () => {
    if (checkAnswers()) {
      const result = matchJobRole(questions);
      navigate("/results", { state: result });
    } else {
      alert("Harap lengkapi semua pertanyaan sebelum melanjutkan.");
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
            <p className="text-gray-700 text-lg">
              Jawab sejujurnya untuk mengetahui tipe kepribadian Anda.
            </p>
          </div>
          <div className="flex items-start mb-4">
            <img src={Icon2} alt="Icon 2" className="w-12 h-12 mr-4" />
            <p className="text-gray-700">
              Pelajari cara tipe kepribadian Anda memengaruhi hidup Anda.
            </p>
          </div>
          <div className="flex items-start">
            <img src={Icon3} alt="Icon 3" className="w-12 h-12 mr-4" />
            <p className="text-gray-700">
              Berkembanglah dengan berbagai materi premium opsional kami.
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
                    Lanjut
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
