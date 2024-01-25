import { useRef, useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

import starshipScene from '../assets/3d/starship.glb';

const StarShip = () => {
    const ref = useRef();
    const { scene, animations } = useGLTF(starshipScene);
  return (
    <mesh ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default StarShip