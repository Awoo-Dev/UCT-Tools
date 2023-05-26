import React, { useState } from "react";
import html2canvas from "html2canvas";
import { Link } from 'react-router-dom';

import "./agenda.css";

function Agenda() {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [screenshotUrl, setScreenshotUrl] = useState("");

  const addEvent = () => {
    const event = { name: eventName, date: eventDate };
    setEvents([...events, event]);
    setEventName("");
    setEventDate("");
  };

  const calculateDaysRemaining = (eventDate) => {
    const today = new Date();
    const targetDate = new Date(eventDate);
    const timeDiff = targetDate.getTime() - today.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysRemaining;
  };

  const formatDaysRemaining = (daysRemaining) => {
    if (daysRemaining === 1) {
      return "Falta 1 día";
    } else if (daysRemaining < 0) {
        var dayst=`Esto ya paso :(`;
      return dayst
    } else if (daysRemaining <= 7) {
        var dayst=`Faltan ${daysRemaining} días`;
      return dayst
    } else {
      const weeks = Math.floor(daysRemaining / 7);
      const remainingDays = daysRemaining % 7;
      return `Faltan ${weeks} semanas y ${remainingDays} días (${daysRemaining} días)`;
    }
  };

  const handleDownload = () => {
    const agendaElement = document.getElementById("agenda-container");

    html2canvas(agendaElement).then((canvas) => {
      const screenshotUrl = canvas.toDataURL("image/jpeg");
      setScreenshotUrl(screenshotUrl);

      const link = document.createElement("a");
      link.href = screenshotUrl;
      link.download = "agenda.jpg";
      link.click();
    });
  };

  return (

    <div>
        <Link to="/" className="chat-link">
    <i class="fa-solid fa-house"></i> Inicio
  </Link>
  <header className='headersec'>
        <h1 className='sech1'>UCT TOOLS!</h1>
    </header>
    <div className="agenda">
      <h1 className="chat-title">Agenda</h1>
      <div className="agenda-form">
        <input
          type="text"
          className="nombreev"
          placeholder="Nombre del evento"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="date"
          className="nombreev"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <button onClick={addEvent}>Agregar evento</button>
      </div>
      <div className="agenda-container" id="agenda-container">
        {events.map((event, index) => (
          <div key={index} className="agenda-event">
            <div className="event-name">{event.name}</div>
            <div className="days-remaining">
              {formatDaysRemaining(calculateDaysRemaining(event.date))}
            </div>
          </div>
        ))}
      </div>
     
      <button onClick={handleDownload}>Descargar</button>
    </div>
    </div>
  );
}

export default Agenda;
