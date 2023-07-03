import { useState } from "react";

const Building = () => {
  const [hoveredFlat, setHoveredFlat] = useState(null);

  const handleFlatHover = (flatId: any) => {
    const totalFlats = flatPositions.length;
    const flatNumber = totalFlats - flatId;
    setHoveredFlat(flatId);
    console.log("Hovered Flat Number:", flatNumber); // Log the hovered flat number in reverse order
  };
  const handleFlatLeave = () => {
    setHoveredFlat(null);
  };

  const handleFlatClick = (flatId: any) => {
    console.log(flatId); // Log the clicked flat ID to the console
  };

  const flatPositions = [
    { left: "39.5%", top: "-14px", width: "350px", availableFlats: 0 },
    { left: "39.5%", top: "16px", width: "350px", availableFlats: 5 },
    { left: "39.5%", top: "46px", width: "350px", availableFlats: 5 },
    { left: "39.5%", top: "75.5px", width: "350px", availableFlats: 5 },
    { left: "39.5%", top: "106.5px", width: "350px", availableFlats: 5 },
    { left: "39.5%", top: "136.5px", width: "350px", availableFlats: 5 },
    { left: "24.9%", top: "166.5px", width: "408.3px", availableFlats: 5 },
    { left: "24.9%", top: "197px", width: "408.3px", availableFlats: 5 },
    { left: "24.9%", top: "227px", width: "408.3px", availableFlats: 5 },
    { left: "24.9%", top: "257px", width: "408.3px", availableFlats: 5 },
    { left: "24.9%", top: "287px", width: "408.3px", availableFlats: 5 },
    { left: "10.6%", top: "317px", width: "465.2px", availableFlats: 5 },
    { left: "10.6%", top: "346px", width: "465.2px", availableFlats: 5 },
    { left: "10.6%", top: "377px", width: "465.2px", availableFlats: 5 },
    { left: "10.6%", top: "407px", width: "465.2px", availableFlats: 5 },
    { left: "10.6%", top: "437px", width: "465.2px", availableFlats: 5 },
  ];
  const reversedFlatPositions = flatPositions.slice().reverse();

  return (
    <div className="relative lg:min-h-[100vh] 2xl:min-h-[80vh] min-h-[50vh] ">
      <img
        src="https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.15752-9/353893815_222306590728799_8394837279183663069_n.png?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Ltlf6gI8oskAX-F01sA&_nc_ht=scontent.ftbs10-1.fna&oh=03_AdSiP7_mU__GONUUt_Xdx_rg6CImqTMwS1PEROqRi7kr4w&oe=64C5371A"
        alt="Building"
        useMap="#flatMap"
        className="image1 absolute brightness-90 rounded "
      />
      <div className="absolute left-[4%] w-[400px] top-28 hidden md:block">
        {reversedFlatPositions.map((position, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: position.left,
              top: position.top,
              height: "17.5px",
              width: position.width,
              borderRadius: 4,
              backdropFilter:
                hoveredFlat === index
                  ? position.availableFlats === 0
                    ? "brightness(2) saturate(0%) sepia(100%) hue-rotate(335deg) brightness(1.1)"
                    : "brightness(2)"
                  : "none",
            }}
            onMouseEnter={() => handleFlatHover(index)}
            onMouseLeave={handleFlatLeave}
            onClick={() => handleFlatClick(index)}
          >
            <p className="">
              {hoveredFlat === index ? (
                <div className="">
                  <div
                    className={` w-48 h-40 absolute left-[80%] rounded-xl p-3 ${
                      position.availableFlats === 0 ? "bg-red-500" : "bg-white"
                    }`}
                  >
                    <p className="text-black flex flex-col">
                      <span className="text-bold text-2xl font-bold">
                        სართული:
                      </span>{" "}
                      {hoveredFlat + 1}
                    </p>
                    <p className="text-black">
                      <span className="text-bold text-lg font-bold">
                        თავისუფალი ბინა:{" "}
                      </span>
                      <p>{position.availableFlats}</p>
                    </p>
                  </div>
                </div>
              ) : null}
            </p>
          </div>
        ))}
      </div>
      <polygon></polygon>
    </div>
  );
};

export default Building;
