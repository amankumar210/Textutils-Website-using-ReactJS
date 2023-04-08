import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here please");
  const handleUPClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLPClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleCopy = () => {
    console.log("Copy button was clicked");
    var copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleClear = () => {
    console.log("Clear button was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Cleared ", "success");
  };
  const handleOnChange = (event) => {
    console.log("onChange was clicked");
    setText(event.target.value);
  };
  // setText = "Set done";
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Please Enter your text below
          </label>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-4"
          onClick={handleUPClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-4"
          onClick={handleLPClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-4"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-4"
          onClick={handleClear}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "black" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            // \s is regex for white space including new lines and + is for more than 1
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} minutes is required to read this
          completely
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here "}</p>
      </div>
    </>
  );
}
