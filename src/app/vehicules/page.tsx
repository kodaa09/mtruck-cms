"use client";
import Vehicule from "../components/client/Vehicule/Vehicule";
import { useState } from "react";
import VehiculeType from "@/types/VehiculeType";

export default function Vehicules() {
  const [isShutterOpen, setShutter] = useState(false);

  return (
    <div className={"vehicules " + (isShutterOpen ? "is-shutter-open " : "")}>
      {VehiculeType.map((vehicule) => (
        <Vehicule
          key={vehicule.id}
          isShutterOpen={isShutterOpen}
          setShutter={setShutter}
          title1={vehicule.title1}
          title2={vehicule.title2}
          title3={vehicule.title3}
          subtitle1={vehicule.subtitle1}
          subtitle2={vehicule.subtitle2}
          subtitle3={vehicule.subtitle3}
          bgImage={vehicule.bgImage}
          image={vehicule.image}
          cta={vehicule.cta}
          shutters={vehicule.shutters}
        />
      ))}
    </div>
  );
}
