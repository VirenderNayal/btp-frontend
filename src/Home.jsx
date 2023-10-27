import React from "react";
import Navbar from "./Navbar";
import ImgVec from "./image_vec.jpg";
import VedVec from "./video_vector.jpg";

export default function Home() {
    return (
        <div>
            <Navbar />

            <div style={{ height: "70vh" }} className="d-flex flex-column justify-content-between align-items-center text-white">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="mb-3 text-success">FOR PREVENTING GENERATIVE AI</p>
                    <h1>DeepFake Detection</h1>
                    <h1>in Generative AI</h1>
                    <p className="mt-4 w-50 text-center justify-center text-wrap">Detecting deepfakes in generative AI is vital for preserving trust and authenticity in digital content. Researchers are actively developing methods to identify these convincingly fabricated media.</p>
                </div>

                <a href="#img_det" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg>
                </a>
            </div>


            <div id="img_det" className="d-flex my-5 justify-content-center text-white">
                {/* <img className="h-25 w-25" src={ImgVec} alt="img_detect" /> */}
                <div className="d-flex w-75 flex-column justify-content-center  text-white">
                    <h1>Deepfake Image Detection</h1>
                    <p className="mt-4">
                        Deepfake image detection is of paramount importance in today's digital age for several compelling reasons. First and foremost, it plays a pivotal role in preserving the truth and upholding the integrity of visual content. Deepfake technology has the potential to create highly convincing fake images and videos, making it crucial to detect and debunk them to prevent the dissemination of false information and narratives.

                        Furthermore, deepfake image detection is instrumental in safeguarding the reputation of individuals and organizations. Malicious actors can use deepfake technology to manipulate images and videos, potentially damaging the character and credibility of targeted individuals or entities. Detecting such manipulated content is essential for protecting their standing and trustworthiness in the eyes of the public and stakeholders.
                    </p>

                    <a href="/image_detection" className="text-decoration-none text-white">
                        <button className="my-5 btn btn-success w-25">
                            Detect Image
                        </button>
                    </a>
                </div>
            </div>

            <div id="vid_det" className="d-flex my-5 justify-content-center text-white">
                {/* <img className="h-25 w-25" src={ImgVec} alt="img_detect" /> */}
                <div className="d-flex w-75 flex-column align-items-end text-white">
                    <h1>Deepfake Video Detection</h1>
                    <p className="mt-4 text-end">
                        Deepfake video detection is of paramount importance in the contemporary digital landscape for various compelling reasons. Foremost among these is its critical role in mitigating the rampant spread of misinformation and disinformation. Deepfake videos have the potential to fabricate entire events or speeches, blurring the line between reality and fiction. Detecting and exposing such deepfake videos is essential to maintaining the credibility of visual media, especially in contexts like politics, journalism, and social discourse, where the consequences of deceptive content can be profound.

                        Additionally, deepfake video detection plays a pivotal role in preserving trust in visual media. As deepfake technology advances, the risk of manipulated videos eroding public confidence in what they see on screens grows. Detecting and flagging deepfake videos helps reinforce trust in the authenticity of visual content, which is crucial for informed decision-making and responsible journalism.
                    </p>

                    <button style={{ cursor: "not-allowed" }} className="my-5 btn btn-danger cursor-na w-25">
                        Detect Video
                    </button>
                </div>
            </div>
        </div>
    );
};