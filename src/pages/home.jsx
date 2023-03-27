import ConfettiEffect from "./confetti";
import DevTestFlag from "./dev-test-flag_flag_test";
import FlagOn from "./flag-on-colour_flag_test";
import FlagOff from "./flag-off-colour_flag_test";
import FlagTest from "./flag-test_flag_test";
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import Subheading from "./subheading";
import viteLogo from "/vite.svg";
import { withLDProvider, useFlags } from "launchdarkly-react-client-sdk";
import "./App.css";

function App() {
  const [count, setCount] = useState(3);
  // These are the flags in LD save for subheading and devTestFlag
  const { flagTest, flagColour, flagOffColour, confettiSwitch } = useFlags();
  return (
    <div className="App">
      {/* The logos for React and Vite */}
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      {/* The heading and first flag subheading. When toggled, different subheading text will show */}
      <h1>LaunchDarkly Demo App</h1>
      <h2>
        <span style={{ opacity: 0.3 }}>
          <Subheading />
        </span>
      </h2>
      {/* The grid of flags and their status */}
      <div className="container">
        <div className="heading"> "flag-test" </div>
        <div className="heading"> "dev-test-flag" </div>
        <div className="heading"> On Colour Flag </div>
        <div className="heading"> Off Colour Flag </div>
        <div className="heading"> Surprise Flag </div>
        {/* flagTest is inplemeneted using useFlags() method */}
        <div className="paragraph">
          <p style={{ "font-size": "2em" }}>
            {flagTest ? <FlagOn /> : <FlagOff />}
          </p>
        </div>
        {/* DevTestFlag is inplemeneted using flags.DevTestFlag method */}
        <div className="paragraph">
          <p style={{ "font-size": "2em" }}>
            <DevTestFlag />
          </p>
        </div>
        {/* Colour of the "ON" text. Either limegreen or blue*/}
        <div className="paragraph">
          <p style={{ "font-size": "2em" }}>
            {flagColour ? (
              <span style={{ color: "LimeGreen" }}>LimeGreen</span>
            ) : (
              <span style={{ color: "Blue" }}>Blue</span>
            )}
          </p>
        </div>
        {/* Colour of the "OFF" text. Either PinkishRed or LightCoral*/}
        <div className="paragraph">
          <p style={{ "font-size": "2em" }}>
            {flagOffColour ? (
              <span style={{ color: "#DE3163" }}>PinkishRed</span>
            ) : (
              <span style={{ color: "LightCoral" }}>LightCoral</span>
            )}
          </p>
        </div>
        {/* The surprise. Click the button 3 times and it will explode confetti*/}
        <div className="paragraph">
          <p style={{ "font-size": "2em" }}>
            {confettiSwitch ? <FlagOn /> : <FlagOff />}
          </p>
        </div>
      </div>
      {/* Nest the confetti function in a feature toggle, enable when true, hidden when false.*/}
      <div>
        {confettiSwitch ? (
          <div className="card">
            <button
              // This line does not allow the counter to go below 0 (i.e. negative numbers)
              onClick={() => setCount((count) => Math.max(count - 1, 0))}
              style={{ border: "2px solid black" }}
            >
              {/* Execute the ternary operation here to only show confetti button if flag allows it */}
              {count == 0 ? (
                <>
                  Surprise! <ConfettiEffect />
                </>
              ) : (
                <>Click for a surprise</>
              )}
            </button>
            <h2> Remaining count {count}</h2>
          </div>
        ) : (
          <div />
        )}
      </div>
      <p className="read-the-docs">
        <a href="https://github.com/garyhuangIAG/ld-vite-app" target="_blank">
          <githublink>Click on here to view the source code</githublink>
        </a>
      </p>
    </div>
  );
}

// Important: Need to have ID key else LD will have no idea where to look for flags
export default withLDConsumer()(App);
