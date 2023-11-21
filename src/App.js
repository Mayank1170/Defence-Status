import "./App.css";

const marketValue = [
  {
    id: 1,
    Value: 58,
    Name: "01 ACCOUNT MGMT",
    totalValue: 58.567,
    textColor: "rgb(202 138 4)",
  },
  {
    id: 2,
    Value: 48,
    Name: "02 MALWARE DEFENSE",
    totalValue: 58.567,
    textColor: "red",
  },
  {
    id: 3,
    Value: 59,
    Name: "03 SECURE NETWORK",
    totalValue: 58.567,
    textColor: "rgb(202 138 4)",
  },
  {
    id: 4,
    Value: 72,
    Name: "04 SECURE CONFIGURATION",
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 5,
    Value: 65,
    Name: "05 SECURE APPLICATIONS",
    totalValue: 58.567,
    textColor: "rgb(202 138 4)",
  },
  {
    id: 6,
    Value: 56,
    Name: "06 DATA SECURITY",
    totalValue: 58.567,
    textColor: "rgb(202 138 4)",
  },
  {
    id: 7,
    Value: 55,
    Name: "07 INCIDENT MGMT",
    totalValue: 58.567,
    textColor: "rgb(202 138 4)",
  },
  {
    id: 8,
    Value: 74,
    Name: "08 SECURITY ASSESSMENT",
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 9,
    Value: 62,
    Name: "09 PHYSICAL SECURITY",
    totalValue: 58.567,
    textColor: "rgb(202 138 4)",
  },
  {
    id: 10,
    Value: 77,
    Name: "10 ACTION REQUIRED",
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 10,
    Value: 77,
    Name: "10 ACTION REQUIRED",
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 10,
    Value: 77,
    Name: "10 ACTION REQUIRED",
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 10,
    Value: 77,
    Name: "10 ACTION REQUIRED",
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 10,
    Value: 77,
    Name: "10 ACTION REQUIRED",
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 10,
    Value: 77,
    Name: "10 ACTION REQUIRED",
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
];

const speedValues = [
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
];
const currentSpeed = 2;
function App() {
  const index = speedValues.indexOf(currentSpeed);
  const prevSpeed = speedValues[index - 1];
  const nextSpeed = speedValues[index + 1];

  const rotateValue =
    index !== -1
      ? ((currentSpeed - prevSpeed) / (nextSpeed - prevSpeed)) * 20 - 10
      : 0;

  return (
    <div className="w-full h-[100vh] flex flex-row bg-zinc-900 items-center justify-center">
      {/* <div className="flex items-center relative bg-zinc-900 "> */}
        <div className="flex items-center relative justify-center border-[4px] border-red-500 rounded-full w-[150px] h-[150px] md:w-[250px] md:h-[250px]">
          <div className="flex items-center justify-center border-[5px] border-red-500 shadow-red-600 shadow-[inset_-0px_-0px_7px_4px] md:shadow-red-500 md:shadow-[inset_-0px_-0px_15px_4px] rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px]">
            {speedValues.map((speed, i) => (
              <div
                key={i}
                className="w-[80%] absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: "50%",
                  left: "10%",
                  transformOrigin: "bottom",
                  transform: `rotate(${
                    (i / (speedValues.length - 13)) * 160
                  }deg) translate(0, -40%)`,
                }}
              >
                <p
                  className={`text-red-500 text-xl md:text-3xl font-semibold absolute ${
                    speed === currentSpeed ? "border-t-2 border-blue-500" : ""
                  }`}
                >
                  {speed}
                </p>
              </div>
            ))}
            <div className="flex justify-center items-center border-[5px] border-black shadow-red-500 shadow-[0_0px_5px_7px]  md:shadow-red-500  md:shadow-[0_0px_8px_10px] rounded-full w-[70px] h-[70px] md:w-[120px] md:h-[120px]">
              <p className="flex items-center justify-center text-3xl md:text-7xl text-white bg-black w-full h-full rounded-full">
                62
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center absolute top-[110px] md:top-[190px] bg-zinc-900 w-[250px] h-[80px]">
          <p className="text-white text-sm md:text-xl ">TOTAL SECURITY </p>
          <p className="text-white  text-sm md:text-xl ">SCORE</p>
        </div>
        </div>
       
      {/* </div> */}
      <div className="flex flex-col">
        <div
          className="relative w-[180px] h-[100px] box-content
          before:content-[''] before:absolute before:top-10 before:right-10
          before:h-[60px] before:w-[60px] before:border-[20px]  
          before:border-red-500 before:border-solid before:border-t-[0px]
          before:border-r-[0px] before:rounded-b-0 before:rounded-bl-[50px] 
          before:-rotate-[270deg] before:box-content"
        ></div>
        <div
          className="relative w-[22px] h-[100px] box-content 

before:content-[''] before:absolute before:top-0 before:left-0
before:h-[60px] before:w-[60px] before:border-[20px] 
before:border-red-500 before:border-solid before:border-t-[0px]
before:border-r-[0px] before:rounded-b-0 before:rounded-bl-[50px] 
before:-rotate-90 before:box-content"
        ></div>
        <div
          className="relative w-[22px] h-[100px] box-content 

before:content-[''] before:absolute before:top-[-30px] before:left-0
before:h-[60px] before:w-[60px] before:border-[20px] 
before:border-red-500 before:border-solid before:border-t-[0px]
before:border-r-[0px] before:rounded-b-0 before:rounded-bl-[50px] 
before:-rotate-[180deg] before:box-content"
        ></div>
        <div
          className="relative w-[180px] h-[100px] box-content
          before:content-[''] before:absolute before:top-[-50px] before:right-10
          before:h-[60px] before:w-[60px] before:border-[20px] 
          before:border-red-500 before:border-solid before:border-t-[0px]
          before:border-r-[0px] before:rounded-b-0 before:rounded-bl-[50px] 
          before:-rotate-[0deg] before:box-content"
        ></div>
      </div>
      <div className="bg-red-500 w-1 h-[600px] z-10 relative "></div>
      <div className="w-[300px] h-[600px] border-4 border-l-0 border-red-500 shadow-red-500 shadow-[0_0px_10px_10px]">
        <div
          className="h-[calc(100vh-70px)]  scrollbar-hide py-3"
          style={{ overflowY: "scroll", scrollbarWidth: "none" }}
        >
          <div>
            <div className="space-y-1">
              {marketValue.map((item) => (
                <RecentTradeData key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const RecentTradeData = ({ Value, Name, textColor }) => {
  return (
    <div className=" w-full rounded-md">
      <div className="flex flex-row gap-x-3 px-3">
        <p
          className="flex items-center justify-center font-redhat text-white border-2 rounded-full w-[40px] h-[40px] text-[12.87px]"
          style={{ borderColor: textColor }}
        >
          {Value}
        </p>
        <p className="flex items-center justify-center text-white text-[12.87px] font-redhat">
          {Name}
        </p>
      </div>
    </div>
  );
};
