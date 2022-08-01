import './App.css';
import { WebGLRenderer, PerspectiveCamera, Scene, Vector3, Clock } from 'three';
import { OrbitControls } from './OrbitControls';
import SeedScene from './objects/Scene.js';
import { render } from '@testing-library/react';

const scene = new Scene();
const { innerHeight, innerWidth } = window;
const camera = new PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
const renderer = new WebGLRenderer({antialias: true});
const seedScene = new SeedScene();
const controls = new OrbitControls( camera, renderer.domElement );

// scene
scene.add(seedScene);

// Setting up the controls
controls.enableZoom = false;
controls.maxPolarAngle = Math.PI/1.3;
controls.minPolarAngle = Math.PI/4;

// camera
const ptToLookAt = new Vector3(0, 1, 0)
controls.target.set(0, 1, 0);
camera.position.set(1.2, 1.7, 3);
camera.lookAt(ptToLookAt);
controls.update();

// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x7ec0ee, 1);

let clock = new Clock();

// render loop
const onAnimationFrameHandler = (timeStamp) => {
  renderer.render(scene, camera);
  seedScene.update && seedScene.update(timeStamp);
  if ( seedScene.children[0].mixer ) seedScene.children[0].mixer.update( clock.getDelta() );
  window.requestAnimationFrame(onAnimationFrameHandler);
}
window.requestAnimationFrame(onAnimationFrameHandler);

// resize
const windowResizeHanlder = () => { 
  const { innerHeight, innerWidth } = window;
  renderer.setSize(innerWidth, (innerHeight - document.body.children[0].clientHeight) / 3);
  camera.aspect = innerWidth / (innerHeight / 3);
  camera.updateProjectionMatrix();
};
windowResizeHanlder();
window.addEventListener('resize', windowResizeHanlder);

// dom
document.body.style.margin = 0;
if (document.body.children[1]){
  document.body.removeChild(document.body.children[1])
}
renderer.domElement.classList.add('samCustomClass');
document.body.appendChild( renderer.domElement );

function App() {
  return (
    <div>
      <div>Hi, I'm Sam.</div>
      <div>I’m a product designer and engineer with skills
      and experiences that allow me to take ideas from
      concept to mock to prototype to production.</div>
      <div>Currently a Full-Stack Software Engineer at Microsoft, Former Embedded
      Devices Enthusiast (SWE Intern) at Garmin, Electrical and Computer Engineering at
      the University of Missouri. </div>
    </div>
  );
}

export default App;
