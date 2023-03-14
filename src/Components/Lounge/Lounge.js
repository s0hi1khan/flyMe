import React from "react";
import crew1 from "../../Assets/images/crew1.jpg";
import crew2 from "../../Assets/images/crew2.jpg";
import {FaHandsHelping} from 'react-icons/fa'
import {MdPriorityHigh} from 'react-icons/md'
import {BsHeartFill} from 'react-icons/bs'
import {GiCarKey} from 'react-icons/gi'

const Lounge = () => {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={crew1} className="crew1" alt="" />
          <img src={crew2} className="crew2" alt="" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
          <div className="grid grids">
            <div className="singleGrid">
              <span className="gridTitle">
              <FaHandsHelping/> Help through the airport</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of the your favourite destinations.
              </p>
            </div>
            <div className="singleGrid">
              <span className="gridTitle">
              <MdPriorityHigh/> Priority Booking</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of the your favourite destinations.
              </p>
            </div>
            <div className="singleGrid">
              <span className="gridTitle">
                <BsHeartFill/> Care on the Flight</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of the your favourite destinations.
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
                <GiCarKey/> Chauffeur-drive Service</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of the your favourite destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
