import { Card } from "@/components/card";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

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
      setVideoWidth(newWindowDimensions.width * 0.7);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 z-10 p-4 flex justify-between items-center">
      <Link to="/about" className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-base">
          About
        </Link>
        <div className="text-2xl text-white flex-grow text-center menlo">nameblank</div>
        <div className="w-24"></div>
      </header>
      <div className="relative menlo pt-16">
        <div className="">
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
            {[1, 2, 3].map((rowNum) => (
              <div key={rowNum} className="w-full max-w-6xl mb-2">
                <h2 className="text-2xl text-white mb-6 mt-8 text-center">{rowNum}</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                  {[1, 2, 3].map((colNum) => (
                    <Card key={colNum} className="overflow-hidden">
                      <img
                        src={`/col1/img${(rowNum - 1) * 3 + colNum}.jpg`}
                        alt={`Image ${(rowNum - 1) * 3 + colNum}`}
                        className="h-full w-full object-cover"
                      />
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
