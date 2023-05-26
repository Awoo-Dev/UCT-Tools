import React, { useState } from "react";
import "./FAQ.css";
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      question: "¿Cuándo se acaba el primer semestre?",
      answer: "Según el calendario, las vacaciones de invierno están programadas para el 17 de julio.",
    },
    {
      question: "¿Dónde hay impresoras en el CN?",
      answer: "En el edificio EB hay 2 impresoras y otra en el CT.",
    },
    {
      question: "¿Cuándo es semana de receso?",
      answer: "La semana de receso varía según la carrera y está determinada por los jefes de carrera y el departamento correspondiente.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (

    <div>
    <Link to="/chat" className="chat-link">
    <i className="fa fa-comments"></i> Chat
  </Link>
  <header className='headersec'>
        <h1 className='sech1'>UCT TOOLS!</h1>
    </header>
    <div className="faq-container">
      <h2 className="faq-title">Preguntas frecuentes</h2>
      <div className="faq-questions">
        {questions.map((item, index) => (
          <div
            className={`faq-question ${index === activeQuestion ? "active" : ""}`}
            key={index}
            onClick={() => toggleAnswer(index)}
          >
            <div className="faq-question-text">
              <span>{item.question}</span>
              <i className={`fas fa-chevron-${index === activeQuestion ? "up" : "down"}`} />
            </div>
            {index === activeQuestion && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;
