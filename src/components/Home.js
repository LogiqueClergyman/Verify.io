const Home = () => {
  return (
    <main className="absolute top-[81px] left-[2px] box-border w-[1600px] h-[819px] overflow-hidden text-center text-xl text-white font-ibm-plex-sans border-[1px] border-solid border-gray-300">
      <img
        className="absolute h-[156.78%] w-[89.44%] top-[30.65%] right-[2.15%] bottom-[-87.42%] left-[8.41%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../group-1000001000.svg"
      />
      <div className="absolute h-[61.95%] w-full top-[14.52%] right-[0%] bottom-[23.53%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <img
            className="absolute h-[82.63%] w-full top-[17.37%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../group.svg"
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[9.46%] w-[13.56%] top-[47.91%] right-[50.42%] bottom-[42.63%] left-[36.02%]">
            <button className="cursor-pointer [border:none] p-0 bg-turquoise-100 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl" />
            <div className="absolute h-[49.12%] w-[83.65%] top-[31.25%] left-[13.85%] text-lg font-medium font-ibm-plex-sans text-gray-100 text-left inline-block">
              Jump right into...
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[9.46%] w-[13.56%] top-[47.91%] right-[36.16%] bottom-[42.63%] left-[50.28%]"
            autoFocus
          >
            <div className="absolute h-[49.12%] w-[26.7%] top-[31.25%] left-[39.49%] text-lg font-medium font-ibm-plex-sans text-white text-left inline-block mix-blend-normal">
              Login
            </div>
            <button className="cursor-pointer p-0 bg-turquoise-200 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl box-border border-[1px] border-solid border-white" />
          </button>
          <div className="absolute h-[37.58%] w-[71.36%] top-[0%] left-[13.11%] inline-block">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span className="font-semibold">
                <span className="text-white">{`Detect, Protect & `}</span>
                <span className="text-turquoise-100">Secure</span>
              </span>
              <span>
                <span className="font-semibold">{` `}</span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>
                <span>Protection from spam, frauds</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>and phishing...</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
