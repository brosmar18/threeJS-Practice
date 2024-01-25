import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import City from "../models/City";
import Space from "../models/Space";
import Plane from "../models/Plane";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentState, setCurrentStage] = useState(1);

  const adjustCityScreenSizes = () => {
    let screenScale = null;
    let screenPosition = [10, -6.5, -90];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0.01, 1, 0.3];
    } else {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0.1, 1, 0.5];
    }

    return [screenScale, screenPosition];
  };

  const [cityScale, cityPosition, cityRotation] = adjustCityScreenSizes();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 3, 1]} intensity={4} />
          <ambientLight intensity={0.9} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Space />
          <City
            position={cityPosition}
            scale={cityScale}
            rotation={cityRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20.4, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
