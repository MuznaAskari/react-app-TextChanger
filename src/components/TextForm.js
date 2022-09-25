import React, {useState} from 'react'

export default function TextForm(props) {
  // state must be declared inside function
  const [Text, settext] = useState('Enter text here');
  // text= "enter text 2" is the wrong way to change state you have to use setText 
  const handleOnChange = (event) => {
    console.log("onChange event");
    settext(event.target.value);
  }
  // allows you to continue typing even after you click the button. This updates your state of text
  const handleUppercase = () => {
    console.log("UpperCase was clicked");
    let newtext= Text.toUpperCase();
    settext(newtext);
    props.showAlert("converted to Uppercase", "success");
  }
  const Lowercase=()=>{
    let newtext= Text.toLowerCase();
    settext(newtext);
    props.showAlert("converted to Lowercase", "success");
  }
  const handleTextColor = () => {
     document.getElementById("box2").style.color = "red";
     props.showAlert("converted to color red", "success");
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(Text);
    props.showAlert('Text Copied','success')
  }
  return (
    <>
     <div className="container" >
       <h1>{props.heading}</h1>
       <div className="mb-3">
          <textarea className="form-control" id="box2" rows="3" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'grey':'white'}} ></textarea>
       </div>
       <button disabled={Text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleUppercase}>Convert  to Uppercase</button>
       <button disabled={Text.length===0} className= {`btn btn-${props.mode} mx-1 my-1`} onClick={Lowercase}>Concert to Lowercase</button>
       <button disabled={Text.length===0} className= {`btn btn-${props.mode} mx-1 my-1`} onClick={handleTextColor}>Change Text color</button>
       <button disabled={Text.length===0} className= {`btn btn-${props.mode} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
     
     <h1 className='my-4'>Your text summay</h1>
     <p> {Text.split(/\s+/).filter((elemant)=>{return elemant.length!==0}).length} words {Text.length} characters</p>
     </div>
    </>
  )
}
