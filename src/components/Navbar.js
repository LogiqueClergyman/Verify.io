import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className=" relative bg-gray-200 overflow-hidden top-[0px] left-[0px] w-[1600px] h-[82px]">
      <img
        className="absolute h-[98.73%] w-[99.72%] top-[0%] right-[0.28%] bottom-[1.27%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../vector.svg"
      />
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-400 [backdrop-filter:blur(40px)]" />
        <Link to="/"><img
          className="absolute h-[22.5%] w-[7.03%] top-[37.5%] right-[84.64%] bottom-[40%] left-[8.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../grupo-13.svg"
        /></Link>
        <div className="absolute h-[22.5%] w-[2.64%] top-[38.75%] left-[21.04%] text-base font-ibm-plex-sans text-white text-left inline-block">
          <Link to="/" className="no-underline text-white">Home</Link>
        </div>
        <div className="absolute h-[22.5%] w-[5%] top-[39.02%] left-[27.71%] text-base font-ibm-plex-sans text-white text-left inline-block">
          <Link to="/verify" className="no-underline text-white">Verification</Link>
        </div>
        <div className="absolute h-[22.5%] w-[4.58%] top-[38.75%] left-[36.74%] text-base font-ibm-plex-sans text-white text-left inline-block">
        <Link to="/profile" className="no-underline text-white">Profile</Link>
        </div>
        <div className="absolute h-[22.5%] w-[4.03%] top-[38.75%] left-[45.35%] text-base font-ibm-plex-sans text-white text-left inline-block">
        <Link to="/about" className="no-underline text-white">About Us</Link>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[45%] w-[9.1%] top-[28.05%] right-[8.33%] bottom-[26.95%] left-[82.57%]"
          autoFocus
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-turquoise-100 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-base"
            autoFocus
          />
          <div className="absolute h-3/6 w-[37.4%] top-[24.39%] left-[31.3%] text-base font-medium font-ibm-plex-sans text-gray-100 text-left inline-block">
            Sign Up
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
