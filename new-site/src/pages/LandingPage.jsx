import { MeshWobbleMaterial } from "drei";
import React from "react";
import { useFrame } from "react-three-fiber";

const firebaseConfig = {
  apiKey: "AIzaSyC33Ivc0vsLk12A37xdWtdjmweTNm3p0xM",
  authDomain: "newsite-9247d.firebaseapp.com",
  projectId: "newsite-9247d",
  storageBucket: "newsite-9247d.appspot.com",
  messagingSenderId: "917046422366",
  appId: "1:917046422366:web:8b473fbe81e7d9b7117dcf",
  measurementId: "G-FNL2VNRY0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

const Orb = ({ color, factor }) => {
  const mesh = React.useRef();
  // Spin the orb
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.05));
  return (
    <mesh ref={mesh} position={[0, 0, 3]}>
      <ambientLight intensity={0.4} color="0x404040" />
      <pointLight intensity={1} position={[1, 5, 3]} />
      <pointLight intensity={1} position={[2, 0, -5]} />
      <pointLight intensity={2} position={[3, 7, -7]} />
      <pointLight intensity={1} position={[4, -3, -15]} />
      <pointLight intensity={5} position={[10, -9, 0]} />
      <pointLight intensity={1} position={[-4, 0, 1]} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        factor={factor}
        speed={1}
        roughness={0}
        args={[1, 250, 250]}
      />
      <sphereBufferGeometry
        attach="geometry"
        visible
        position={[0, 0, 5]}
        args={[1, 250, 250]} // The higher the width and height segments, the smoother the surface!
      />
    </mesh>
  );
};

export default Orb;
