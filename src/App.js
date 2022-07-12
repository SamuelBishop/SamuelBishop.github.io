import logo from './logo.svg';
import './App.css';
import { WebGLRenderer, PerspectiveCamera, Scene, Vector3, Clock } from 'three';
import SeedScene from './objects/Scene.js';

const scene = new Scene();
const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer({antialias: true});
const seedScene = new SeedScene();

// Importing me


// scene
scene.add(seedScene);

// camera
// 2 definetly z
// 1 is back from the guy
// 3 is to the right of the guy
camera.position.set(0,1.7,3);
camera.lookAt(new Vector3(0,1,0));

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
    <body></body>
    // <div class="center">
    //   <div class="titleText">Good morning, cutie.</div>
    //   <div class="titleText">Here's a flower for you</div>
    // </div>
  );
}

export default App;
