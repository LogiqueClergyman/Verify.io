import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Verification from "./Verification";
import About from "./About";
import About1 from "./About1";
import Profie1 from "./Profile1"
import History from "./History"
import Pro from "./Pro"


import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

const Desktop = () => {
  return (
    <div className="relative bg-gray-200 w-[full] h-[1024px] overflow-hidden">
      <img
        className="absolute h-[98.73%] w-[99.72%] top-[0%] right-[0.28%] bottom-[1.27%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../vector.svg"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/verify" element={<Verification/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Pro/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Desktop;
