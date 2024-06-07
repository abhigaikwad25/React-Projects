import React, { useState } from "react";




export default function TextForm(props) {
    const convertUpCase = () => {
        {/*When i will type on buttton then 'Button was click' is shown*/ }
        console.log("Button was click ");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to upper case","Success")

    }
    const convertLoCase = () => {
        {/*When i will type on buttton then 'Button was click' is shown*/ }
        console.log("Button was click ");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lower case","Success")
    }
    const capitalizeText = () => {
        console.log("capitalizeText Button was click ");
        let newText = text.split(" ");
        let finalText = newText.map(text => text.charAt(0).toUpperCase() + text.slice(1)).join(" ");
        setText(finalText);
        props.showAlert("Convert to Capitalize form","Success")
    }
    const sentenceCase = () => {
        console.log("sentenceCase Button was click ");
        let finalText = (text.charAt(0).toUpperCase()+ text.slice(1));
        setText(finalText);
        props.showAlert("Convert to sentence form","Success")
    }
    const clearcase = () => {
        {/*When i will type on buttton then 'Button was click' is shown*/ }
        console.log(" clearcase Button was click ");
        setText(" ");
        props.showAlert("Clear textarea","Success")
    }

    const copytext = () => {
        {/*When i will type on buttton then 'Button was click' is shown*/ }
        console.log("copytext Button was click ");

        let text=document.getElementById('mybox')
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy textarea","Success")
    }


    const changes = (event) => {
        console.log("0n changes"); {/*When i will type in text area then on change is shown on console*/ }
        setText(event.target.value); {/*IMP step*/ }
    }

    const [text, setText] = useState("");
    //this function is for changing only the textFild container
    // let togglestyle=()=>{
    //     if(color.color=='black'){
    //         setColor({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setColor({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }
    // // useState for textFiled dark mode or light mode
    // const [btnText, setBtnText]=useState("Enable Dark Mode")

    // const [color, setColor] = useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })
    return (
        <>
        <div className="container p-4 my-2" >
            <div>
                <h1 className="heading my-3" >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={changes}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={convertUpCase}>Convert To Upper Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={convertLoCase}>Convert To Lower Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={capitalizeText}>Capitalize Taxt</button>
                <button className="btn btn-primary mx-1 my-1" onClick={sentenceCase}>Sentence Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={copytext}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={clearcase}>Clear Text</button>

            </div>
            <div className="container1 my-4">
                <h6>Number of words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</h6>
                <h6>Number of Character : {text.length}</h6>
                <h6>Time required to Read this passage : {0.008 * text.split(" ").length} min</h6>
                <h5>Preview</h5>
                <p>{text.length>0?text:"Enter Something in text area"}</p>
            </div>
            
        </div>
        </>
    )
}