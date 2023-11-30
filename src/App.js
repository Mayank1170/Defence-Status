import "bootstrap/dist/css/bootstrap.min.css"; 

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

const App = () => {
  const index = speedValues.indexOf(currentSpeed);
  const prevSpeed = speedValues[index - 1];
  const nextSpeed = speedValues[index + 1];

  const rotateValue =
    index !== -1
      ? ((currentSpeed - prevSpeed) / (nextSpeed - prevSpeed)) * 20 - 10
      : 0;

  return (
    <div class="container-fluid w-100 h-100 d-flex flex-row bg-dark text-light align-items-center justify-content-center">
      <div class="d-flex align-items-center position-relative bg-dark">
        <div class="d-flex align-items-center position-relative justify-content-center border border-4 border-danger rounded-circle width-150 height-150 md-width-250 md-height-250">
          <div class="d-flex align-items-center justify-content-center border border-5 border-danger shadow-red-600 shadow-inset-0-0-7-4 md-shadow-red-500 md-shadow-inset-0-0-15-4 rounded-circle width-130 height-130 md-width-200 md-height-200">
            {speedValues.map((speed, i) => (
              <div
                key={i}
                class="w-80p position-absolute translate-middle-x translate-middle-y"
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
                  class={`text-danger text-xl md-text-3xl font-weight-bold position-absolute ${
                    speed === currentSpeed ? "border-top-2 border-blue-500" : ""
                  }`}
                >
                  {speed}
                </p>
              </div>
            ))}
            <div class="d-flex justify-content-center align-items-center border border-5 border-dark shadow-red-500 shadow-0-0-5-7 md-shadow-red-500 md-shadow-0-0-8-10 rounded-circle width-70 height-70 md-width-120 md-height-120">
              <p class="d-flex align-items-center justify-content-center text-3xl md-text-7xl text-white bg-black width-100 height-100 rounded-circle">
                {" "}
                62
              </p>
            </div>
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center position-absolute top-110 md-top-190 bg-dark width-250 height-80">
            <p class="text-white text-sm md-text-xl">TOTAL SECURITY</p>
            <p class="text-white text-sm md-text-xl">SCORE</p>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="position-relative width-180 height-100 box-content">
          <div class="position-absolute top-10 end-10 before-content-'' height-60 width-60 border-20 border-red-500 border-solid border-t-0 border-r-0 rounded-bottom-0 rounded-bottom-start-50 -rotate-270 box-content"></div>
        </div>
        <div class="position-relative width-22 height-100 box-content">
          <div class="position-absolute top-0 start-0 before-content-'' height-60 width-60 border-20 border-red-500 border-solid border-t-0 border-r-0 rounded-bottom-0 rounded-bottom-start-50 -rotate-90 box-content"></div>
        </div>
        <div class="position-relative width-22 height-100 box-content">
          <div class="position-absolute top-n30 start-0 before-content-'' height-60 width-60 border-20 border-red-500 border-solid border-t-0 border-r-0 rounded-bottom-0 rounded-bottom-start-50 -rotate-180 box-content"></div>
        </div>
        <div class="position-relative width-180 height-100 box-content">
          <div class="position-absolute top-n50 end-10 before-content-'' height-60 width-60 border-20 border-red-500 border-solid border-t-0 border-r-0 rounded-bottom-0 rounded-bottom-start-50 -rotate-0 box-content"></div>
        </div>
      </div>
      <div class="bg-danger width-1 height-600 z-10 position-relative"></div>
      <div class="width-300 height-600 border border-4 border-left-0 border-danger shadow-red-500 shadow-0-0-10-10">
        <div
          class="height-calc(100vh-70px) py-3"
          // style="overflow-y: scroll; scrollbar-width: none;"
        >
          <div>
            <div class="space-y-1">
              {marketValue.map((item) => (
                <RecentTradeData key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentTradeData = ({ Value, Name, textColor }) => {
  return (
    <div className="w-100 rounded-md">
      <div className="d-flex flex-row gap-3 px-3">
        <p
          className={`d-flex align-items-center justify-content-center font-redhat text-white border-2 rounded-circle w-40 h-40 text-13`}
          style={{ borderColor: textColor }}
        >
          {Value}
        </p>
        <p
          className="d-flex align-items-center justify-content-center text-white font-redhat"
          style={{ fontSize: "12.87px" }}
        >
          {Name}
        </p>
      </div>
    </div>
  );
};

export default App;
