import "./App.css";
import { Card } from "@/components/card";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

function App() {
  const [videoWidth, setVideoWidth] = useState(0);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const newWindowDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    if (newWindowDimensions.width < 1024) {
      setVideoWidth(newWindowDimensions.width - 16);
    } else {
      setVideoWidth(newWindowDimensions.width * 0.8);
    }
  };

  return (
    <>
      <div className="">
        <div className="p-8 text-center text-4xl font-thin tracking-tight text-white">
          nameblank
        </div>
        <div className="flex flex-col items-center">
          <Card>
            <ReactPlayer
              playing
              loop
              muted={true}
              url="col1/video1.mp4"
              height={(videoWidth * 9) / 16}
              width={videoWidth}
              controls={false}
              style={{
                objectFit: "cover",
                transition: "all .3s",
              }}
            />
          </Card>
          <div className="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <Card key={num} className="overflow-hidden">
                <img
                  src={`/col1/img${num}.jpg`}
                  alt={`Image ${num}`}
                  className="h-full w-full object-cover"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
