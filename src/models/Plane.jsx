import { useRef, useEffect } from 'react';
import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, planeScale, planePosition, ...props}) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  useEffect(() => {
    if(ref.current) {
      ref.current.scale.set(...planeScale);
      ref.current.position.set(...planePosition);
    };

  }, [planeScale, planePosition]);
  

  return (
   <mesh {...props} ref={ref}>
    <primitive object={scene} />
   </mesh>
  )
}

export default Plane