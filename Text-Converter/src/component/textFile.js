import React, { useState } from "react";



export default function TextForm(props) {
    const convertUpCase = () => {
        {/*When i will type on buttton then 'Button was click' is shown*/ }
        console.log("Button was click ");
        let newText = text.toUpperCase();
        setText(newText);

    }
    const convertLoCase = () => {
        {/*When i will type on buttton then 'Button was click' is shown*/ }
        console.log("Button was click ");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const capitalizeText = () => {
        console.log("capitalizeText Button was click ");
        let newText = text.split(" ");
        let finalText = newText.map(text => text.charAt(0).toUpperCase() + text.slice(1)).join(" ");
        setText(finalText);
    }
    const sentenceCase = () => {
        console.log("sentenceCase Button was click ");
        let finalText = (text.charAt(0).toUpperCase()+ text.slice(1));
        setText(finalText);
    }
    const clearcase = () => {
        {/*When i will type on buttton then 'Button was click' is shown*/ }
        console.log(" clearcase Button was click ");
        setText(" ");
    }

    const changes = (event) => {
        console.log("0n changes"); {/*When i will type in text area then on change is shown*/ }
        setText(event.target.value); {/*IMP step*/ }
    }

    const [text, setText] = useState("Enter here");
    //this function is for changing only the textFild container
    let togglestyle=()=>{
        if(color.color=='black'){
            setColor({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mode");
        }
        else{
            setColor({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }
    // // useState for textFiled dark mode or light mode
    const [btnText, setBtnText]=useState("Enable Dark Mode")

    const [color, setColor] = useState({
        color:"black",
        backgroundColor:"white"
    })
    return (
        <>
        <div className="container p-4 my-2" style={color}>
            <div>
                <h1 className="heading my-3" >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" rows="8" value={text} onChange={changes}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={convertUpCase}>Convert To Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={convertLoCase}>Convert To Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={capitalizeText}>Capitalize Taxt</button>
                <button className="btn btn-primary mx-1" onClick={sentenceCase}>Sentence Case</button>
                <button className="btn btn-primary mx-1" onClick={clearcase}>Clear Text</button>

            </div>
            <div className="container1 my-4">
                <h6>Number of words : {text.split(" ").length}</h6>
                <h6>Number of Character : {text.length}</h6>
                <h6>Time required to Read this passage : {0.008 * text.split(" ").length}</h6>
                <h6>Preview</h6>
                <p>{text}</p>
            </div>
            <button type="button" onClick={togglestyle} class="btn btn-primary">{btnText}</button>
        </div>
        </>
    )
}