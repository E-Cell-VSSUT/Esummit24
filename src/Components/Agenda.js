import React, { useEffect, useState } from "react";
import "../styles.css";
import { IoSearch } from "react-icons/io5";
const Agenda = () => {
  const [day1, setDay1] = useState([]);
  const [day2, setDay2] = useState([]);
  const [day, setDay] = useState(1);
  const branch = ["Chemical", "Civil", "CSE", "Electrical"];
  const domains = ["Chemical", "Civil", "CSE", "Electrical"];
  const venue = ["Chemical", "Civil", "CSE", "Electrical"];

  const [selectedbranch, setSelectedbranch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedVenue, setSelectedVenue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedbranch(event.target.value);
  };
  const handleSelectChangeDomains = (event) => {
    setSelectedDomain(event.target.value);
  };
  const handleSelectVenueChange = (event) => {
    setSelectedVenue(event.target.value);
  };
  const clearFilters = () => {
    setSelectedbranch("");
    setSelectedDomain("");
    setSelectedVenue("");
  };
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
        <button id="filter" onClick={clearFilters}>
          Clear Filter
        </button>
      </div>
      <div className="filter-buttons">
        <div className="filter">
          <label for="venue">Select Venue</label>
          <select
            className="dropdown-select"
            value={selectedVenue}
            onChange={handleSelectVenueChange}
          >
            <option value="">Select Venue</option>
            {branch.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label for="venue">Select Venue</label>
          <select
            className="dropdown-select"
            value={selectedbranch}
            onChange={handleSelectChange}
          >
            <option value="">Select Venue</option>
            {domains.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label for="venue">Select Venue</label>
          <select
            className="dropdown-select"
            value={selectedDomain}
            onChange={handleSelectChangeDomains}
          >
            <option value="">Select Branch</option>
            {venue.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="filter">
          <div className="search">
            <IoSearch />
            <input type="text" placeholder="search" />
          </div>
        </div>
      </div>
      {day1 && day1.length > 0 ? (
        day1.map((item, index) => (
          <div className="agenda" key={index}>
            <div className="agenda-content">
              <div className="agenda-header">
                <p className="topic">
                  <span className="topic-content">Topic: </span>
                  {item.company.department}
                </p>
              </div>
              <div className="agenda-body">
                <div className="agenda-body-content">
                  <div className="details">
                    <p className="venue">
                      <span className="venue-content">Venue:</span>
                      {item.address.city}
                    </p>
                    <p className="time">
                      <span className="time-content">Time:</span>
                      8:00 PM
                    </p>
                  </div>
                  <div className="vbar"></div>
                  <div className="description">
                    <p>
                      <span className="description-content">Description:</span>
                      Additionally, make sure that your CSS styles are properly
                      applied to the agenda-container class or any other
                      relevant classes used in your JSX. Check your CSS file
                      (page.module.css) to ensure there are styles defined for
                      .agenda-container and its child elements. If the styles
                      overriding the visibility of your agenda-container or its
                      children.
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
                            <p className="name">{item.firstName}</p>
                            <p className="name">{item.company.title}</p>
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
        <div id="loading">Loading...</div>
      )}
    </div>
  );
};

export default Agenda;