import React, { useEffect, useState } from "react";
import "../styles.css";
import { agenda } from "../constants";

const Agenda = () => {
  const [day1, setDay1] = useState([]);
  const [day2, setDay2] = useState([]);
  const [day, setDay] = useState(1);

  const fetchDay1 = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    setDay1(data.users);
    
    console.log(data.users);
  };
  useEffect(() => {
    fetchDay1();
  }, []);
  const handleDayClick = (dayNumber) => {
    setDay(dayNumber);
  };
  return (
    <div className="agenda-container">
      <div className="agenda-header">
        <h1>Agenda</h1>
      </div>
      <div className="topbar">
        <button
          className={day === 1 ? "active" : ""}
          onClick={() => handleDayClick(1)}
        >
          Day1
        </button>
        <button
          className={day === 2 ? "active" : ""}
          onClick={() => handleDayClick(2)}
        >
          Day2
        </button>
      </div>
  
      {day==1 ? (
        agenda.Day1?.map((item, index) => (
          <div className="agenda" key={index}>
            <div className="agenda-content">
              <div className="agenda-header">
                <p className="topic">
                  <span className="topic-content">Topic: </span>
                  {item.topic}
                </p>
              </div>
              <div className="agenda-body">
                <div className="agenda-body-content">
                  <div className="details">
                    <p className="venue">
                      <span className="venue-content">Venue:</span>
                      {item.venue}
                    </p>
                    <p className="time">
                      <span className="time-content">Time:</span>
                     {item.time}
                    </p>
                  </div>
                  <div className="vbar"></div>
                  <div className="description">
                    <p>
                      <span className="description-content">Description:</span>
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="keywords-container">
                  <p className="keywords"></p>
                </div>
                <div className="agenda-speakers-container">
                  <div className="agenda-speakers">
                    <div className="agenda-speakers-content">
                      <a href="#">
                        <img src={item.imgurl} />
                        <div className="speaker-detail">
                          <p className="type">Speaker</p>
                          <div className="speaker-details-content">
                            <p className="name">{item.speaker}</p>
                            <p className="name">{item.designation}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        agenda.Day2?.map((item, index) => (
          <div className="agenda" key={index}>
            <div className="agenda-content">
              <div className="agenda-header">
                <p className="topic">
                  <span className="topic-content">Topic: </span>
                  {item.topic}
                </p>
              </div>
              <div className="agenda-body">
                <div className="agenda-body-content">
                  <div className="details">
                    <p className="venue">
                      <span className="venue-content">Venue:</span>
                      {item.venue}
                    </p>
                    <p className="time">
                      <span className="time-content">Time:</span>
                      {item.time}
                    </p>
                  </div>
                  <div className="vbar"></div>
                  <div className="description">
                    <p>
                      <span className="description-content">Description:</span>
                     {item.description}
                    </p>
                  </div>
                </div>
                <div className="keywords-container">
                  <p className="keywords"></p>
                </div>
                <div className="agenda-speakers-container">
                  <div className="agenda-speakers">
                    <div className="agenda-speakers-content">
                      <a href="#">
                        <img src={item.image} />
                        <div className="speaker-detail">
                          <p className="type">Speaker</p>
                          <div className="speaker-details-content">
                            <p className="name">{item.speaker}</p>
                            <p className="name">{item.designation}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Agenda;