import './App.css';
import { WebGLRenderer, PerspectiveCamera, Scene, Vector3, Clock } from 'three';
import { OrbitControls } from './OrbitControls';
import SeedScene from './objects/Scene.js';

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
controls.keys = {
	LEFT: 'ArrowLeft', //left arrow
	UP: 'ArrowUp', // up arrow
	RIGHT: 'ArrowRight', // right arrow
	BOTTOM: 'ArrowDown' // down arrow
}
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

// let mixer = new AnimationMixer(seedScene.children[0]);
// mixer.clipAction(seedScene.children[0].animations[0]).play();
let clock = new Clock();
console.log(seedScene);

// render loop
const onAnimationFrameHandler = (timeStamp) => {
  renderer.render(scene, camera);
  seedScene.update && seedScene.update(timeStamp);
  if ( seedScene.children[0].mixer ) seedScene.children[0].mixer.update( clock.getDelta() );
  window.requestAnimationFrame(onAnimationFrameHandler);
  // controls.update();
}
window.requestAnimationFrame(onAnimationFrameHandler);

// resize
const windowResizeHanlder = () => { 
  const { innerHeight, innerWidth } = window;
  renderer.setSize(innerWidth, innerHeight - document.body.children[1].clientHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};
windowResizeHanlder();
window.addEventListener('resize', windowResizeHanlder);

// dom
document.body.style.margin = 0;
if (document.body.children[2]){
  document.body.removeChild(document.body.children[2])
}
document.body.appendChild( renderer.domElement );


function App() {
  return (
    <body></body>
  );
}

export default App;
