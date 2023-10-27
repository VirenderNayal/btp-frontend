import React, { useState } from "react";
import Navbar from "./Navbar";
import './image_detection.css';

export default function ImageDetection() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div>
            <Navbar />

            <div className="d-flex flex-column justify-content-between align-items-center text-white">
                <label for="images" className="w-50 drop-container" id="dropcontainer">
                    <span className="drop-title">Drop files here</span>
                    or
                    <input type="file" id="images" accept="image/*" required />
                </label>

                <button className="mt-5 btn btn-success">Check Image</button>
            </div>
        </div>
    );
};