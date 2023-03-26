import { withLDProvider } from "launchdarkly-react-client-sdk";
import "./App.css";
import FlagTest from "./flag-test_flag_test";
import DevTestFlag from "./dev-test-flag_flag_test";
import React, { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ConfettiEffect from "./confetti";

function App() {
  const [count, setCount] = useState(3);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>LaunchDarkly Demo App</h1>
      <h2>
        <span style={{ opacity: 0.3 }}>Made with React and Vite</span>
      </h2>
      <div className="container">
        <div className="heading"> Flag Test</div>
        <div className="heading"> Dev Test Flag </div>
        <div className="paragraph">
          <p style={{ "font-size": "2em" }}>
            <FlagTest />
          </p>
        </div>
        <div className="paragraph">
          <p style={{ "font-size": "2em" }}>
            <DevTestFlag />
          </p>
        </div>
      </div>
      <div className="card">
        <button
          onClick={() => setCount((count) => Math.max(count - 1, 0))}
          style={{ border: "2px solid black" }}
        >
          Click for a surprise
        </button>
        <h2> Remaining count {count}</h2>
      </div>
      <>{count == 0 ? <> We at 0 boss </> : <> Still a bit to go boss</>}</>
      <p className="read-the-docs">
        <a href="https://github.com/garyhuangIAG/ld-vite-app" target="_blank">
          <githublink>Click on here to view the source code</githublink>
        </a>
      </p>
      {/* <div>
        <ConfettiEffect />
      </div> */}
    </div>
  );
}

export default withLDProvider({
  clientSideID: "640e707dcc661113a25cce60",
})(App);
