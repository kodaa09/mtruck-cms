"use client";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Shutter from "../Shutter";

export default function Vehicule({ setShutter, isShutterOpen, title1, title2, title3, subtitle1, subtitle2, subtitle3, image, bgImage, cta, shutters }: any) {
  const [counter, setCounter] = useState(title1 - 1000);
  const [bgdImage, setBgImage] = useState(image);

  function useInterval(callback: any, delay: number) {
    const savedCallback: MutableRefObject<undefined> = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // useEffect(() => {
    //   let id = setInterval(() => {
    //     savedCallback.current();
    //   }, delay);
    //   return () => clearInterval(id);
    // }, [delay]);
  }

  useInterval(() => {
    if (counter < title1) setCounter(counter + 1);
  }, 1);

  return (
    <div className="vehicule" style={{ backgroundImage: `url(${bgdImage})` }}>
      {isShutterOpen && <Shutter setShutter={setShutter} shutters={shutters} />}
      <div className="vehicule-content-container">
        <div className="vehicule-content">
          <div className="vehicule-content-txt">
            <Fade direction="up" cascade damping={0.2}>
              <p className="vehicule-infos">
                <span className="vehicule-infos-txt vehicule-number">{Intl.NumberFormat().format(counter)}€</span>
                <br />
                {subtitle1}
              </p>
              <p className="vehicule-infos">
                <span className="vehicule-infos-txt">{title2}</span>
                <br />
                {subtitle2}
              </p>
              <p className="vehicule-infos">
                <span className="vehicule-infos-txt">{title3}</span>
                <br />
                {subtitle3}
              </p>
            </Fade>
          </div>
          <Fade direction="down" duration={1500}>
            <button
              className="vehicule-btn"
              onMouseOver={() => {setBgImage(bgImage)}}
              onMouseLeave={() => {setBgImage(image)}}
              onClick={() => {setShutter(true)}}>
              {cta}
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
}
