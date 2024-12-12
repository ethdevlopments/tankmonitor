import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from './ProgressBar';
import "./Dashboard.css";
import { FaCircle } from 'react-icons/fa'; 

const Dashboard = () => {
    const borewellImg = require("./assets/Borewell.png"); 
    const directcurrentImg = require("./assets/Directcurrent.png"); 
    const overheadtankImg = require("./assets/overheadtank.png"); 
    const rsiImg = require("./assets/rsi.png"); 
    const solarImg = require("./assets/solar.png"); 

    return (
      <div className="dashboard">
        <h1>Tank monitor</h1>
        <div className="cards">
          <Link to="/borewell" className="card">            
            <div className="icon-header-container">
                <img src={borewellImg} alt="Borewell" className="icon-header-image" />
                <h2 className="icon-header-title">Borewell</h2>
            </div>
            <p className="power-consumption">
                <strong className="power-consumption-units">10 ft</strong> flow per feet
            </p>
            <p className="voltage"> Status: 
                <span className="status-text-icon blinkingstatus">
                        Idle
                </span>
            </p>
          </Link>
          <Link to="/direct-current" className="card">
            <div className="icon-header-container">
                <img src={directcurrentImg} alt="Direct Current" className="icon-header-image" />
                <h2 className="icon-header-title">Direct Current</h2>
            </div>  
            <p className="power-consumption">
                <strong className="power-consumption-units">320 W</strong> Power Consumption (This Month)
            </p>
            <p className="voltage">Voltage <strong>24 V</strong></p>
          </Link>
          <Link to="/overhead-tank" className="card">
            <div className="icon-header-container">
                <img src={overheadtankImg} alt="Overhead Tank" className="icon-header-image" />
                <h2 className="icon-header-title">Overhead Tank</h2>
            </div> 
            <p className="power-consumption">
                <strong className="power-consumption-units">500 Ltrs</strong>
            </p> 
            <p><ProgressBar targetProgress={78} />Water Stored</p>
          </Link>
          <Link to="/rsi" className="card">
            <div className="icon-header-container">
                <img src={rsiImg} alt="RSI" className="icon-header-image" />
                <h2 className="icon-header-title">RSI</h2>
            </div>  
            <p className="power-consumption">
                <strong className="power-consumption-units">4.2 KW</strong>
            </p> 
            <p> <ProgressBar targetProgress={99.9} />Efficiency</p>
          </Link>
          <Link to="/solar" className="card">
            <div className="icon-header-container">
                <img src={solarImg} alt="Solar" className="icon-header-image" />
                <h2 className="icon-header-title">Solar</h2>
            </div>  
            <p className="power-consumption">
                <strong className="power-consumption-units">900 W</strong>
            </p> 
            <p> <ProgressBar targetProgress={50} />Contribution</p>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Dashboard;