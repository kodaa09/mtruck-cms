"use client";
import { Fade } from "react-awesome-reveal";
import Shutter from "./Shutter";
import { useEffect, useState } from "react";

export default function Vehicule() {
  const [isShutterOpen, setIsShutterOpen] = useState(false);

  function onOpen() {
    setIsShutterOpen(true);
  }

  return (
    <div className="vehicule">
      <Shutter setIsShutterOpen={setIsShutterOpen} />
      <div className="vehicule-content-container">
        <div className="vehicule-content">
          <div className="vehicule-content-txt">
            <Fade direction="up" cascade damping={0.2}>
              <p className="vehicule-infos">
                <span className="vehicule-infos-txt">40 000€</span>
                <br />A partir de
              </p>
              <p className="vehicule-infos">
                <span className="vehicule-infos-txt">40 000€</span>
                <br />A partir de
              </p>x
              <p className="vehicule-infos">
                <span className="vehicule-infos-txt">40 000€</span>
                <br />A partir de
              </p>
            </Fade>
          </div>
          <Fade direction="down" duration={1500}>
            <button className="vehicule-btn" onClick={() => setIsShutterOpen(true)}>En savoir plus</button>
          </Fade>
        </div>
      </div>
    </div>
  );
}
