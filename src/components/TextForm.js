import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase!", "success");
    };
    const handleLowClick = () => {
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted to lowercase!", "success");
    };
    const handleClearClick = () => {
      let newtext = '';
      setText(newtext);
      props.showAlert("Cleared Text!", "success");
    };
    const handleCopyClick = () => {
      const text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!", "success");
    };
    const handleOnChange = (event) => {
      setText(event.target.value)
    };


  const [text, setText] = useState('');
  
  
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='light'?'grey':'#d5ffcf', color: props.mode==='dark'?'white':'black'}}
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
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>

      <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter(word=> word!=="").length} words, {text.length} character
        </p>
        <p>
          {0.008 * text.split("").length}
          <b> Minutes </b>for reading
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the text box above to preview it here!"}</p>
      </div>
    </>
  );
}
