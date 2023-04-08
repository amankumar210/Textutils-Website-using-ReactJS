// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

let name1 = "AMAN SINHA";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      console.log("Dark is set");
      document.body.style.backgroundColor = "#132435";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils - 1st Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils - 2nd Mode";
      // }, 1500);
    } else {
      setMode("light");
      console.log("Light is set");
      showAlert("Light Mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils";
    }
  };
  const toggleModeR = () => {
    if (mode === "light") {
      setMode("dark");
      console.log("Red Mode is enabled");
      document.body.style.backgroundColor = "red";
      showAlert("Red Mode has been enabled", "success");
    } else {
      setMode("light");
      console.log("Red is disabled");
      showAlert("Red Mode has been disabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };
  const toggleModeG = () => {
    if (mode === "light") {
      setMode("dark");
      console.log("Green Mode is enabled");
      document.body.style.backgroundColor = "green";
      showAlert("Green Mode has been enabled", "success");
    } else {
      setMode("light");
      console.log("Green Mode is disabled");
      showAlert("Green Mode has been disabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };
  const toggleModeB = () => {
    if (mode === "light") {
      setMode("dark");
      console.log("Blue Mode is enabled");
      document.body.style.backgroundColor = "blue";
      showAlert("Blue Mode has been enabled", "success");
    } else {
      setMode("light");
      console.log("Blue Mode is disabled");
      showAlert("Blue Mode has been disabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <BrowserRouter>
        <div className="container"></div>
        <Navbar
          title="Text Utils"
          mode={mode}
          toggleMode={toggleMode}
          toggleModeR={toggleModeR}
          toggleModeG={toggleModeG}
          toggleModeB={toggleModeB}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
              />
            }
          />
          <Route path="/about" element={<About />} />;
        </Routes>
        {/* <Navbar title="Text Utils" /> */}
      </BrowserRouter>
      {/* <About /> */}
    </>
  );
}

export default App;
