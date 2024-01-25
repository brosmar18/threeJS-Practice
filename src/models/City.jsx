import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import cityScene from "../assets/3d/city.glb";

const City = (props) => {
    const cityRef = useRef();
  const { nodes, materials } = useGLTF(cityScene);
  return (
    <a.group ref={cityRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
        <group
          position={[-142.569, -151.717, 67.158]}
          rotation={[Math.PI / 2, -1.057, 0]}
        >
          <mesh
            geometry={nodes.Torus_036_Torus_002_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_036_Torus_002_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[-134.708, -166.037, 18.231]}
          rotation={[Math.PI / 2, 0.49, 0]}
          scale={[1.606, 2.068, 5.522]}
        >
          <mesh
            geometry={nodes.Torus_035_Torus_005_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_035_Torus_005_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[7.331, -236.061, 2.051]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            geometry={nodes.Sphere_020_Sphere_001_1.geometry}
            material={materials.tree}
          />
          <mesh
            geometry={nodes.Sphere_020_Sphere_001_2.geometry}
            material={materials.tree}
          />
          <mesh
            geometry={nodes.Sphere_020_Sphere_001_3.geometry}
            material={materials.tree}
          />
          <mesh
            geometry={nodes.Sphere_020_Sphere_001_4.geometry}
            material={materials.tree}
          />
          <mesh
            geometry={nodes.Sphere_020_Sphere_001_5.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-124.239, -183.913, 67.158]}
          rotation={[-Math.PI / 2, 1.05, -Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_036_Torus_003_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_036_Torus_003_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[-124.641, -184.139, 67.601]}
          rotation={[-Math.PI / 2, 1.05, -Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_035_Torus_006_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_035_Torus_006_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[-124.665, -184.137, 28.137]}
          rotation={[-Math.PI / 2, 1.05, -Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_034_Torus_003_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_034_Torus_003_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_034_Torus_003_2.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[-142.165, -151.494, 67.601]}
          rotation={[Math.PI / 2, -1.057, 0]}
        >
          <mesh
            geometry={nodes.Torus_035_Torus_004_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_035_Torus_004_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[39.246, -144.461, 53.813]}
          rotation={[Math.PI / 2, 0.937, 0]}
        >
          <mesh
            geometry={nodes.Torus_031_Torus_001_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_031_Torus_001_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[-142.141, -151.496, 28.137]}
          rotation={[Math.PI / 2, -1.057, 0]}
        >
          <mesh
            geometry={nodes.Torus_034_Torus_002_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_034_Torus_002_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_034_Torus_002_2.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[166.66, -170.943, 83.133]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_028_Torus_001_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_028_Torus_001_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[38.722, -144.337, 93.083]}
          rotation={[Math.PI / 2, 0.937, 0]}
        >
          <mesh
            geometry={nodes.Sphere_019_Sphere_001_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_001_0_1.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_001_0_2.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_001_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[39.309, -144.639, 11.058]}
          rotation={[Math.PI / 2, 0.937, 0]}
        >
          <mesh
            geometry={nodes.Torus_029_Torus_001_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_029_Torus_001_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[165.708, -173.629, 47.81]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        >
          <mesh
            geometry={nodes.Circle_001_0.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Circle_001_1.geometry}
            material={materials.glass_mullion}
          />
        </group>
        <group
          position={[166.327, -170.268, 51.437]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_027_Torus_001_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_027_Torus_001_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[164.097, -172.158, 16.245]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_026_Torus_001_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_026_Torus_001_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_026_Torus_001_2.geometry}
            material={materials.grass}
          />
          <mesh
            geometry={nodes.Torus_026_Torus_001_3.geometry}
            material={materials.lights_1}
          />
          <mesh
            geometry={nodes.Torus_026_Torus_001_4.geometry}
            material={materials.water}
          />
          <mesh
            geometry={nodes.Torus_026_Torus_001_5.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[-51.094, -155.282, 106.932]}
          rotation={[1.571, 1.555, 0]}
        >
          <mesh
            geometry={nodes.Torus_014_Torus_001_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_014_Torus_001_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_014_Torus_001_2.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[-51.007, -155.513, 101.189]}
          rotation={[1.571, 1.555, 0]}
        >
          <mesh
            geometry={nodes.Torus_013_Torus_001_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_013_Torus_001_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_013_Torus_001_2.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[-51.007, -155.515, 63.945]}
          rotation={[1.571, 1.555, 0]}
        >
          <mesh
            geometry={nodes.Torus_005_Torus_001_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_005_Torus_001_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_005_Torus_001_2.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[-50.664, -155.494, 17.379]}
          rotation={[1.571, 1.555, 0]}
        >
          <mesh
            geometry={nodes.Torus_002_Torus_002_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_002_Torus_002_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_002_Torus_002_2.geometry}
            material={materials.grass}
          />
          <mesh
            geometry={nodes.Torus_002_Torus_002_3.geometry}
            material={materials.lights_1}
          />
          <mesh
            geometry={nodes.Torus_002_Torus_002_4.geometry}
            material={materials.water}
          />
          <mesh
            geometry={nodes.Torus_002_Torus_002_5.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[69.097, -65.08, 93.083]}
          rotation={[-Math.PI / 2, 0.792, -Math.PI]}
        >
          <mesh
            geometry={nodes.Sphere_019_Sphere_004_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_004_0_1.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_004_0_2.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_004_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[69.302, -64.583, 53.813]}
          rotation={[-Math.PI / 2, 0.792, -Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_031_Torus_004_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_031_Torus_004_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[69.488, -64.548, 11.058]}
          rotation={[-Math.PI / 2, 0.792, -Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_029_Torus_004_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_029_Torus_004_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[17.088, -65.574, 93.083]}
          rotation={[-Math.PI / 2, -0.853, Math.PI]}
        >
          <mesh
            geometry={nodes.Sphere_019_Sphere_003_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_003_0_1.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_003_0_2.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_003_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[16.576, -65.407, 53.813]}
          rotation={[-Math.PI / 2, -0.853, Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_031_Torus_003_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_031_Torus_003_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[186.379, -35.981, 17.379]}
          rotation={[1.571, 1.555, 0]}
        >
          <mesh
            geometry={nodes.Torus_002_Torus_001_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_002_Torus_001_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_002_Torus_001_2.geometry}
            material={materials.grass}
          />
          <mesh
            geometry={nodes.Torus_002_Torus_001_3.geometry}
            material={materials.lights_1}
          />
          <mesh
            geometry={nodes.Torus_002_Torus_001_4.geometry}
            material={materials.water}
          />
          <mesh
            geometry={nodes.Torus_002_Torus_001_5.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[186.036, -36.003, 63.945]}
          rotation={[1.571, 1.555, 0]}
        >
          <mesh
            geometry={nodes.Torus_005_Torus_003_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_005_Torus_003_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_005_Torus_003_2.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[186.036, -36.001, 101.189]}
          rotation={[1.571, 1.555, 0]}
        >
          <mesh
            geometry={nodes.Torus_013_Torus_005_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_013_Torus_005_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_013_Torus_005_2.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[185.949, -35.769, 106.932]}
          rotation={[1.571, 1.555, 0]}
        >
          <mesh
            geometry={nodes.Torus_014_Torus_006_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_014_Torus_006_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_014_Torus_006_2.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[-100.504, -23.967, 16.245]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_026_Torus_029_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_026_Torus_029_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_026_Torus_029_2.geometry}
            material={materials.grass}
          />
          <mesh
            geometry={nodes.Torus_026_Torus_029_3.geometry}
            material={materials.lights_1}
          />
          <mesh
            geometry={nodes.Torus_026_Torus_029_4.geometry}
            material={materials.water}
          />
          <mesh
            geometry={nodes.Torus_026_Torus_029_5.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[-98.274, -22.077, 51.437]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_027_Torus_030_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_027_Torus_030_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[-98.893, -25.438, 47.81]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        >
          <mesh
            geometry={nodes.Circle_002_0.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Circle_002_1.geometry}
            material={materials.glass_mullion}
          />
        </group>
        <group
          position={[-97.941, -22.753, 83.133]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_028_Torus_031_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_028_Torus_031_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[-142.421, -62.89, 11.058]}
          rotation={[-Math.PI / 2, 0.635, -Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_029_Torus_032_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_029_Torus_032_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[-142.599, -62.953, 53.813]}
          rotation={[-Math.PI / 2, 0.635, -Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_031_Torus_034_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_031_Torus_034_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[-142.724, -63.477, 93.083]}
          rotation={[-Math.PI / 2, 0.635, -Math.PI]}
        >
          <mesh
            geometry={nodes.Sphere_019_Sphere_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_0_1.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_0_2.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[23.775, -7.221, 28.137]}
          rotation={[Math.PI / 2, 0.03, 0]}
        >
          <mesh
            geometry={nodes.Torus_034_Torus_039_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_034_Torus_039_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_034_Torus_039_2.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[23.762, -7.241, 67.601]}
          rotation={[Math.PI / 2, 0.03, 0]}
        >
          <mesh
            geometry={nodes.Torus_035_Torus_040_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_035_Torus_040_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[23.772, -7.702, 67.158]}
          rotation={[Math.PI / 2, 0.03, 0]}
        >
          <mesh
            geometry={nodes.Torus_036_Torus_041_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_036_Torus_041_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[42.16, 32.527, 2.051]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        >
          <mesh
            geometry={nodes.Sphere_020_Sphere_007_1.geometry}
            material={materials.tree}
          />
          <mesh
            geometry={nodes.Sphere_020_Sphere_007_2.geometry}
            material={materials.tree}
          />
          <mesh
            geometry={nodes.Sphere_020_Sphere_007_3.geometry}
            material={materials.tree}
          />
          <mesh
            geometry={nodes.Sphere_020_Sphere_007_4.geometry}
            material={materials.tree}
          />
          <mesh
            geometry={nodes.Sphere_020_Sphere_007_5.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[40.105, -7.41, 18.231]}
          rotation={[-1.571, 1.565, -3.142]}
          scale={[1.606, 2.068, 5.522]}
        >
          <mesh
            geometry={nodes.Torus_035_Torus_001_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_035_Torus_001_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[60.798, -6.946, 28.137]}
          rotation={[-Math.PI / 2, -0.036, Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_034_Torus_001_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_034_Torus_001_1.geometry}
            material={materials.glaze2}
          />
          <mesh
            geometry={nodes.Torus_034_Torus_001_2.geometry}
            material={materials.floor}
          />
        </group>
        <group
          position={[60.812, -6.926, 67.601]}
          rotation={[-Math.PI / 2, -0.036, Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_035_Torus_002_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_035_Torus_002_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[60.798, -6.465, 67.158]}
          rotation={[-Math.PI / 2, -0.036, Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_036_Torus_001_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_036_Torus_001_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[-9.144, -34.24, 6.291]}
          rotation={[-Math.PI / 2, 0.733, -Math.PI]}
          scale={[1.606, 2.068, 5.522]}
        >
          <mesh
            geometry={nodes.Torus_035_Torus_003_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_035_Torus_003_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[94.176, -33.938, 6.291]}
          rotation={[-Math.PI / 2, -0.786, Math.PI]}
          scale={[1.606, 2.068, 5.522]}
        >
          <mesh
            geometry={nodes.Torus_035_Torus_008_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_035_Torus_008_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[16.528, -65.224, 11.058]}
          rotation={[-Math.PI / 2, -0.853, Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_029_Torus_003_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_029_Torus_003_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[75.927, -192.892, 93.083]}
          rotation={[-Math.PI / 2, -0.918, Math.PI]}
        >
          <mesh
            geometry={nodes.Sphere_019_Sphere_002_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_002_0_1.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_002_0_2.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Sphere_019_Sphere_002_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[75.406, -192.758, 53.813]}
          rotation={[-Math.PI / 2, -0.918, Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_031_Torus_002_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_031_Torus_002_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[-134.708, -166.037, 6.291]}
          rotation={[Math.PI / 2, 0.49, 0]}
          scale={[1.606, 2.068, 5.522]}
        >
          <mesh
            geometry={nodes.Torus_035_Torus_007_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_035_Torus_007_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <group
          position={[75.346, -192.58, 11.058]}
          rotation={[-Math.PI / 2, -0.918, Math.PI]}
        >
          <mesh
            geometry={nodes.Torus_029_Torus_002_0.geometry}
            material={materials.build_mat}
          />
          <mesh
            geometry={nodes.Torus_029_Torus_002_1.geometry}
            material={materials.glaze2}
          />
        </group>
        <mesh
          geometry={nodes.Plane_001_1.geometry}
          material={materials.site_2}
          position={[22.75, -171.948, 0.22]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Cylinder_007_1.geometry}
          material={materials.build_mat}
          position={[28.359, -141.801, 46.674]}
          rotation={[Math.PI / 2, 0.937, 0]}
        />
        <mesh
          geometry={nodes.Cylinder_002_1.geometry}
          material={materials.build_mat}
          position={[51.511, -144.1, 46.78]}
          rotation={[Math.PI / 2, 0.937, 0]}
        />
        <mesh
          geometry={nodes.Sphere_018_Sphere_001_1.geometry}
          material={materials.tree}
          position={[184.597, -152.288, 2.512]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        />
        <mesh
          geometry={nodes.Sphere_017_Sphere_001_1.geometry}
          material={materials.tree}
          position={[141.318, -155.199, 5.419]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        />
        <mesh
          geometry={nodes.Sphere_016_Sphere_001_1.geometry}
          material={materials.tree}
          position={[178.959, -161.226, 7.527]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        />
        <mesh
          geometry={nodes.Sphere_015_Sphere_001_1.geometry}
          material={materials.tree}
          position={[164.816, -189.285, 5.418]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        />
        <mesh
          geometry={nodes.Cylinder_008_1.geometry}
          material={materials.build_mat}
          position={[25.266, -146.007, 46.933]}
          rotation={[Math.PI / 2, 0.937, 0]}
        />
        <mesh
          geometry={nodes.Cylinder_001_1.geometry}
          material={materials.build_mat}
          position={[165.13, -166.624, 71.457]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        />
        <mesh
          geometry={nodes.Cube_002_1.geometry}
          material={materials.grass}
          position={[9.986, -200.098, -0.395]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Torus_004_Torus_001_1.geometry}
          material={materials.build_mat}
          position={[-52.544, -154.297, 27.483]}
          rotation={[1.571, 1.555, 0]}
        />
        <mesh
          geometry={nodes.Cylinder_017_1.geometry}
          material={materials.build_mat}
          position={[68.63, -78.631, 46.933]}
          rotation={[-Math.PI / 2, 0.792, -Math.PI]}
        />
        <mesh
          geometry={nodes.Cylinder_016_1.geometry}
          material={materials.build_mat}
          position={[64.962, -74.916, 46.674]}
          rotation={[-Math.PI / 2, 0.792, -Math.PI]}
        />
        <mesh
          geometry={nodes.Cylinder_015_1.geometry}
          material={materials.build_mat}
          position={[70.873, -52.413, 46.78]}
          rotation={[-Math.PI / 2, 0.792, -Math.PI]}
        />
        <mesh
          geometry={nodes.Cylinder_014_1.geometry}
          material={materials.build_mat}
          position={[30.636, -65.039, 46.933]}
          rotation={[-Math.PI / 2, -0.853, Math.PI]}
        />
        <mesh
          geometry={nodes.Cylinder_012_1.geometry}
          material={materials.build_mat}
          position={[4.324, -64.738, 46.78]}
          rotation={[-Math.PI / 2, -0.853, Math.PI]}
        />
        <mesh
          geometry={nodes.Cylinder_013_1.geometry}
          material={materials.build_mat}
          position={[27.201, -68.971, 46.674]}
          rotation={[-Math.PI / 2, -0.853, Math.PI]}
        />
        <mesh
          geometry={nodes.Torus_004_Torus_002_1.geometry}
          material={materials.build_mat}
          position={[184.499, -34.785, 27.483]}
          rotation={[1.571, 1.555, 0]}
        />
        <mesh
          geometry={nodes.Cube_001_1.geometry}
          material={materials.grass}
          position={[39.505, -3.435, -0.395]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.Cylinder_003_1.geometry}
          material={materials.build_mat}
          position={[-99.471, -18.433, 71.457]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        />
        <mesh
          geometry={nodes.Sphere_015_Sphere_003_1.geometry}
          material={materials.tree}
          position={[-99.785, -41.094, 5.418]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        />
        <mesh
          geometry={nodes.Sphere_016_Sphere_004_1.geometry}
          material={materials.tree}
          position={[-85.642, -13.035, 7.527]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        />
        <mesh
          geometry={nodes.Sphere_017_Sphere_005_1.geometry}
          material={materials.tree}
          position={[-123.283, -7.008, 5.419]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        />
        <mesh
          geometry={nodes.Sphere_018_Sphere_006_1.geometry}
          material={materials.tree}
          position={[-80.004, -4.097, 2.512]}
          rotation={[-Math.PI / 2, 0.721, -Math.PI]}
        />
        <mesh
          geometry={nodes.Cylinder_004_1.geometry}
          material={materials.build_mat}
          position={[-142.943, -50.688, 46.78]}
          rotation={[-Math.PI / 2, 0.635, -Math.PI]}
        />
        <mesh
          geometry={nodes.Cylinder_005_1.geometry}
          material={materials.build_mat}
          position={[-145.275, -73.836, 46.674]}
          rotation={[-Math.PI / 2, 0.635, -Math.PI]}
        />
        <mesh
          geometry={nodes.Cylinder_006_1.geometry}
          material={materials.build_mat}
          position={[-141.073, -76.935, 46.933]}
          rotation={[-Math.PI / 2, 0.635, -Math.PI]}
        />
        <mesh
          geometry={nodes.Plane_007_1.geometry}
          material={materials.site_2}
          position={[22.75, -36.713, 0.22]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Cylinder_010_1.geometry}
          material={materials.build_mat}
          position={[86.241, -195.623, 46.674]}
          rotation={[-Math.PI / 2, -0.918, Math.PI]}
        />
        <mesh
          geometry={nodes.Cylinder_011_1.geometry}
          material={materials.build_mat}
          position={[89.412, -191.476, 46.933]}
          rotation={[-Math.PI / 2, -0.918, Math.PI]}
        />
        <mesh
          geometry={nodes.Cylinder_009_1.geometry}
          material={materials.build_mat}
          position={[63.136, -192.89, 46.78]}
          rotation={[-Math.PI / 2, -0.918, Math.PI]}
        />
      </group>
    </a.group>
  );
};

export default City;
