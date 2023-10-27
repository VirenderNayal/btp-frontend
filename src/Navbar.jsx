import React from "react";
import "./navbar.css";

export default function Navbar() {

    return (
        <nav className="d-flex justify-content-between">
            <a className="text-decoration-none text-white" href="/">Deepfake Detection</a>
            <div className="d-flex">
                <a className="mx-4 text-decoration-none text-white" href="/">Home</a>
                <a className="mx-4 text-decoration-none text-white" href="/image_detection">Image Detection</a>
                <a className="mx-4 text-decoration-none text-white" href="/#vid_det">Video Detection</a>
                <a className="mx-4 text-decoration-none text-white" href="">About</a>
            </div>
        </nav>
    );
};