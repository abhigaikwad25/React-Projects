import React from 'react';
import "../App.css";


export default function About() {
    return (
        <div className="container my-5">
            <div className="mb-3">
                <label for="exampleInputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Surname Yourname Fathername</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <textarea className="form-control" rows="8" placeholder='message, query ,suggestion'></textarea>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

        </div>
    )
}
