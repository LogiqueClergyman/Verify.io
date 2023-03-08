const HomeMobile = () => {
  return (
    <div className="absolute top-[65px] left-[1px] w-[389px] h-[860px] text-center text-xl text-white font-ibm-plex-sans">
      <div className="absolute h-[19.2%] w-[89.29%] top-[7.56%] left-[5.36%] whitespace-pre-wrap inline-block">
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <span className="font-semibold font-ibm-plex-sans">
            <span className="text-white">{`Detect, Protect & `}</span>
            <span className="text-turquoise-100">Secure</span>
          </span>
          <span>
            <span className="font-semibold font-ibm-plex-sans">{` `}</span>
            <span>{` `}</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>Protection from spam, frauds and phishing...</span>
          </span>
        </p>
      </div>
      <div className="absolute h-[12.66%] w-[89.29%] top-[35.92%] right-[5.36%] bottom-[51.42%] left-[5.36%] text-left text-base">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[41.38%] w-full top-[0%] right-[0%] bottom-[58.62%] left-[0%]"
          autoFocus
        >
          <button className="cursor-pointer [border:none] p-0 bg-turquoise-100 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl" />
          <div className="absolute h-[37.75%] w-[32.82%] top-[31.19%] left-[32.87%] text-base font-medium font-ibm-plex-sans text-gray-100 text-left inline-block">
            Jump right into...
          </div>
        </button>
        <div className="absolute h-[41.38%] w-full top-[58.62%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-turquoise-200 box-border border-[1px] border-solid border-white" />
          <div className="absolute h-[37.5%] w-[10.57%] top-[31.25%] left-[44.57%] font-medium inline-block">
            Login
          </div>
        </div>
      </div>
      <img
        className="absolute h-[40.91%] w-[99.49%] top-[53.6%] right-[0%] bottom-[5.48%] left-[0.51%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../group-1000001008.svg"
      />
      <img
        className="absolute h-[23.37%] w-[99.49%] top-[76.63%] right-[0.51%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full mix-blend-screen"
        alt=""
        src="../light.svg"
      />
      <img
        className="absolute h-[15.23%] w-[34.95%] top-[23.26%] right-[65.05%] bottom-[61.51%] left-[0%] max-w-full overflow-hidden max-h-full mix-blend-screen"
        alt=""
        src="../light1.svg"
      />
      <img
        className="absolute h-[15.23%] w-[34.95%] top-[33.37%] right-[8.93%] bottom-[51.4%] left-[56.12%] max-w-full overflow-hidden max-h-full mix-blend-screen"
        alt=""
        src="../light2.svg"
      />
      <img
        className="absolute h-[15.23%] w-[34.95%] top-[0%] right-[1.28%] bottom-[84.77%] left-[63.78%] max-w-full overflow-hidden max-h-full mix-blend-screen"
        alt=""
        src="../light3.svg"
      />
    </div>
  );
};

export default HomeMobile;
