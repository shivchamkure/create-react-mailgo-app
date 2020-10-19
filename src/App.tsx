import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import mailgo, { MailgoConfig } from "mailgo";

const mailgoConfig: MailgoConfig = {
  dark: true,
};

function App() {
  useEffect(() => {
    mailgo(mailgoConfig);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="mailto:matteo@manzinello.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          A mailto link
        </a>
      </header>
    </div>
  );
}

export default App;
