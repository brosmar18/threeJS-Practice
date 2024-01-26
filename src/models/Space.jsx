import { useGLTF } from "@react-three/drei";
import spaceScene from "../assets/3d/space.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Space = ({ isRotating }) => {
  const space = useGLTF(spaceScene);
  const spaceRef = useRef();

  useFrame((_, delta) => {
    if(isRotating) {
      spaceRef.current.rotation.y += 0.15 * delta;
    };
  });

  return (
    <mesh ref={spaceRef}>
      <primitive object={space.scene} />
    </mesh>
  );
};

export default Space;
