import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "./horario.css";
import { Link } from 'react-router-dom';
const ScheduleCreator = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  const scheduleRef = useRef(null);

  const handleCourseInputChange = (event) => {
    setSelectedCourse({ ...selectedCourse, [event.target.name]: event.target.value });
  };

  const handleAddCourse = () => {
    if (selectedCourse.name && selectedCourse.startTime && selectedCourse.endTime && selectedCourse.day) {
      setCourses([...courses, selectedCourse]);
      setSelectedCourse({});
    }
  };

  const handleDeleteCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  const handleDragStart = (event, course) => {
    event.dataTransfer.setData("course", JSON.stringify(course));
  };

  const handleDrop = (event, day) => {
    const droppedCourse = JSON.parse(event.dataTransfer.getData("course"));
    const updatedCourse = { ...droppedCourse, day };
    const updatedCourses = [...courses, updatedCourse];
    setCourses(updatedCourses);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDownloadSchedule = () => {
    if (scheduleRef.current) {
      html2canvas(scheduleRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/jpeg");
        link.download = "horario.jpg";
        link.click();
      });
    }
  };

  // Ordenar las materias por día y hora de inicio
  const sortedCourses = [...courses].sort((a, b) => {
    if (a.day === b.day) {
      const startTimeA = parseInt(a.startTime.split(":")[0]);
      const startTimeB = parseInt(b.startTime.split(":")[0]);
      return startTimeA - startTimeB;
    } else {
      return a.day - b.day;
    }
  });

  return (

    <div>
    <Link to="/chat" className="chat-link">
    <i className="fa fa-comments"></i> Chat
  </Link>
  <header className='headersec'>
        <h1 className='sech1'>UCT TOOLS!</h1>
    </header>
    <div className="schedule-creator-container">
      <h2 className="chat-title">Creador de Horarios</h2>
      <div className="course-inputs">
        <input
          type="text"
          name="name"
          value={selectedCourse.name || ""}
          placeholder="Nombre de la materia"
          onChange={handleCourseInputChange}
        />
        <input
          type="text"
          name="startTime"
          value={selectedCourse.startTime || ""}
          placeholder="Hora de inicio"
          onChange={handleCourseInputChange}
        />
        <input
          type="text"
          name="endTime"
          value={selectedCourse.endTime || ""}
          placeholder="Hora de finalización"
          onChange={handleCourseInputChange}
        />
        <input
          type="text"
          name="day"
          value={selectedCourse.day || ""}
          placeholder="Día de la semana"
          onChange={handleCourseInputChange}
        />
        
      </div>
      <div className="schedule">
      <button className="add-course-button" onClick={handleAddCourse}>
          Agregar Materia
        </button>
      </div>
     
      <div ref={scheduleRef} className="schedule-preview">
        <h3 className="chat-title">Horario:</h3>
        <table>
          <thead>
            <tr>
              <th>Materia</th>
              <th>Hora de inicio</th>
              <th>Hora de finalización</th>
              <th>Día</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {sortedCourses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.startTime}</td>
                <td>{course.endTime}</td>
                <td>{course.day}</td>
                <td>
                  <button className="delete-course-button" onClick={() => handleDeleteCourse(index)}>
                    X
                  </button>
                </td>
              </tr>
              
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
    <div className="download-section">
        <button className="download-button" onClick={handleDownloadSchedule}>
          Descargar Horario
        </button>
      </div>
    </div>
  );
};

export default ScheduleCreator;
