import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, StorageReference} from 'firebase/storage'
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three'
import {OrbitControls, Stars, useGLTF} from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {Galaxy} from './models/Galaxy';

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


// let finalsrc  = imgSrcs(imgRef);

//App component that creates the scene and renders the galaxy
function App() {

  return (
    <div  className='canvas'>
    <Canvas> 
      <OrbitControls/>
      <Galaxy />
      <Galaxy />
      <Stars/>
    </Canvas>
    </div>
  );
}

export default App;
