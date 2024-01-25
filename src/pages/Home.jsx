import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import City from '../models/City';
import Space from "../models/Space";
import StarShip from "../models/StarShip";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustCityScreenSizes = () => {
    let screenScale = null;
    let screenPosition = [50, -6.5, -120];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  }

  const [cityScale, cityPosition, cityRotation] = adjustCityScreenSizes();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
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
          />
          <StarShip />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
