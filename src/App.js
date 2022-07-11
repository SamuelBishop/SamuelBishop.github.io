import logo from './logo.svg';
import './App.css';
import { WebGLRenderer, PerspectiveCamera, Scene, Vector3 } from 'three';
import SeedScene from './objects/Scene.js';

const scene = new Scene();
const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer({antialias: true});
const seedScene = new SeedScene();

// scene
scene.add(seedScene);

// camera
camera.position.set(3,3,-10);
camera.lookAt(new Vector3(0,0,0));

// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x7ec0ee, 1);

// render loop
const onAnimationFrameHandler = (timeStamp) => {
  renderer.render(scene, camera);
  seedScene.update && seedScene.update(timeStamp);
  window.requestAnimationFrame(onAnimationFrameHandler);
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
// document.body.removeChild(2)
if (document.body.children[2]){
  document.body.removeChild(document.body.children[2])
}
document.body.appendChild( renderer.domElement );

// if (document.getElementById("root").children){
//   document.body.appendChild( renderer.domElement );
// }
// document.body[1] = renderer.domElement;


function App() {
  return (
    <div class="center">
      <div class="titleText">Good morning, cutie.</div>
      <div class="titleText">Here's a flower for you</div>
    </div>
  );
}

export default App;
