import React,{useState} from 'react'

export default function TextForm(props) {
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        console.log("handleUpClick clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Uppercase!","success");
    }
    const handleLowClick=()=>{
        console.log("handleLowClick clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to Lowercase!","success");
    }
    const handleClearClick=()=>{
        console.log("handleClearClick clicked");
        let newText='';
        setText(newText);
        props.showAlert("Text cleared!","warning");
    }
    const handleExtraSpace=()=>{
        console.log("handleExtraSpace clicked");
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed!","success");
    }
   const[text,setText]=useState("");
  return (
<>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Enter here</label>
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#3875B2':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value ={text} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <div div className="container my-2">
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove extra Spaces</button>
        <button className='btn btn-primary' onClick={handleClearClick}>Clear text</button>
        </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your text Summary</h3>
        <p> Words Count: {text.split(" ").length} and characters count: {text.length}</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Preview here</h3>
                <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter some text in text box to preview it."}</p>
    </div>
    </>
  )
}
