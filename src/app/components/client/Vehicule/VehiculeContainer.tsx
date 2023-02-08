"use client";
import { useState } from "react";
import Vehicule from "./Vehicule";
import FaqContainer from "../FaqContainer";


export default function VehiculeContainer() {
  const [isShutterOpen, setShutter] = useState(false);

  return (
    <div className="vehicule-container">
      <div className="vehicule-container-wrapper">
        <Vehicule setShutter={setShutter} isShutterOpen={isShutterOpen}/>
        <FaqContainer />
      </div>
    </div>
  );
}