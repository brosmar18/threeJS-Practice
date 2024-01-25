import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import starshipScene from "../assets/3d/starship.glb";

const StarShip = ({ isRotating, starshipScale, starshipPosition, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(starshipScene);

  useEffect(() => {
    if (ref.current) {
      // Apply the scale to the top-level group of the model
      ref.current.scale.set(...starshipScale);
      // Apply the position to the top-level group of the model
      ref.current.position.set(...starshipPosition);
    }
  }, [starshipScale, starshipPosition]); // This useEffect will run when either scale or position changes


  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default StarShip;
