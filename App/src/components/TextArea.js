import React, { useState } from 'react'
export default function TextArea
(props) {
  const checkText = () => {
    if (text.trim() === "") {
      props.showAlert("Please enter some text", "danger");
      return true;
    }
    return false;
  };
  const handleTransform = (transformFn, message) => {
    if (checkText()) return;
    setext(transformFn(text));
    props.showAlert(message, "success");
  };
   function handleChange(e){
        setext(e.target.value);
    }
    const[text,setext]=useState("");
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <div className="form-floating">
        <h2>Enter Any text here </h2>
  <textarea className="form-control" placeholder="Leave a comment here" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} onChange={handleChange}id="floatingTextarea" rows="8" value={text}></textarea>
</div>
<button type="button" className="btn btn-primary my-2 mx-3" onClick={() => handleTransform((t) => t.toUpperCase(), "Converted to Uppercase")}
>UpperCase</button>
<button type="button" className="btn btn-primary my-2 mx-3"onClick={() => handleTransform((t) => t.toLowerCase(), "Converted to Lowercase")}
>LowerCase</button>
<button type="button" className="btn btn-primary my-2 mx-3"onClick={() => handleTransform(() => "", "Text has been cleared")}
>Clear Text</button>

</div>
<div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
    <p className="my-3" >{text.split(" ").length-1} Words and {text.length} characters 
    </p>
    <div className="container">
    <h2>Preview Text</h2>
    <p>{text.length>0?text:"Enter some text in the box to preview it"}</p>
    </div>
</div>
</>
  )
}
