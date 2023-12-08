import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLowClick = () => {
      let newtext = text.toLowerCase();
      setText(newtext);
    };
    const handleClearClick = () => {
      let newtext = '';
      setText(newtext);
    };
    const handleOnChange = (event) => {
      setText(event.target.value)
    };
  const [text, setText] = useState('');
  
  
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-5">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length - 1} words, {text.length} character
        </p>
        <p>
          {0.008 * text.split(" ").length}
          <b> Minutes </b>for reading
        </p>
      </div>
    </>
  );
}
