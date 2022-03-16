import './App.css';
// import { initializeApp } from 'firebase/app';
// import { getStorage} from 'firebase/storage'
import { Canvas } from 'react-three-fiber';
import {OrbitControls, Stars} from '@react-three/drei';
import {Galaxy} from './models/Galaxy';
import {Perspective} from './models/Perspective';
import {Wave} from './models/Wave';
import HomeGrid from './Layout/HomeGrid';
import styled from 'styled-components';

// const firebaseConfig = {
//   apiKey: "AIzaSyC33Ivc0vsLk12A37xdWtdjmweTNm3p0xM",
//   authDomain: "newsite-9247d.firebaseapp.com",
//   projectId: "newsite-9247d",
//   storageBucket: "newsite-9247d.appspot.com",
//   messagingSenderId: "917046422366",
//   appId: "1:917046422366:web:8b473fbe81e7d9b7117dcf",
//   measurementId: "G-FNL2VNRY0Z"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const storage = getStorage();


// let finalsrc  = imgSrcs(imgRef);

//App component that creates the scene and renders the galaxy

// place the canvas in a home grid
const Grid = styled(HomeGrid)``;
function App() {

  return (
    <div  className='canvas'>
      <HomeGrid>    
      <Canvas>
        <ambientLight intensity={0.5} />
      <OrbitControls/>
      <Stars/>       
      </Canvas>
      <Canvas>
        <ambientLight intensity={0.5} />
      <OrbitControls/>
      <Galaxy scale={[0.06,0.06,0.06]}/>       
      </Canvas>

      <Canvas>
        <ambientLight intensity={0.5} />
      <OrbitControls/>
      <Wave />       
      </Canvas>

      <Canvas>
        <ambientLight intensity={0.5} />
      <OrbitControls/>
      <Perspective />       
      </Canvas>

      <Canvas>
        <ambientLight intensity={0.5} />
      <OrbitControls/>
      <Galaxy />       
      </Canvas>

      <Canvas>
        <ambientLight intensity={0.5} />
      <OrbitControls/>
      <Wave />       
      </Canvas>
      </HomeGrid>



    
    </div>
    
  );
}

export default App;
