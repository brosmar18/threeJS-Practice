import { useGLTF } from "@react-three/drei";

import spaceScene from "../assets/3d/space.glb";
import { useRef } from "react";

const Space = () => {
  const space = useGLTF(spaceScene);
  const spaceRef = useRef();
  return <mesh ref={spaceRef}>
    <primitive object={space.scene} />
  </mesh>;
};

export default Space;
