import React from "react";
import { Schedule } from "./Schedule";

export function Home(){
    return(
        <div>
            <div style={{ display: "flex" }}>
              <div className="grid-container">
                <div style={{ fontWeight: "900" }}>
                    <p>Get ready for your next adventure!</p>
                    <h1>
                    Unlock <span style={{ color: "#e46400" }}>massive</span> savings with our car rental service
                    </h1>
                </div>
                <p>
                  Experience the car of your dreams with unbeatable prices, unlimited miles, flexible pick-up options, and so much more.
                </p>
              </div>
              <img
                className="carImg"
                src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"
                alt=""
              />
            </div>
            <Schedule/>
        </div>
    );
}