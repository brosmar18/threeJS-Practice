import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import City from '../models/City';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustCityScreenSizes = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
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
        className="w-full h-screen relative"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <City 
            position={cityPosition}
            scale={cityScale}
            rotation={cityRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
