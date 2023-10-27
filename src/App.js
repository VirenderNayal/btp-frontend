import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import ImageDetection from './ImageDetection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/image_detection" element={<ImageDetection/>} />
          {/* <Route path="*" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
