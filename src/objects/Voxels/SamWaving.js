import { Group, AnimationMixer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import MODEL from './SamWaving.glb';


// let animationAction = new AnimationAction();

export default class SamWaving extends Group {
  constructor() {
    const loader = new GLTFLoader();
    // let mixer = new AnimationMixer();
    // const animationActions = new AnimationAction[1];
    // const clock = new Clock();
    // const delta = clock.getDelta();
    super();

    this.name = 'SamWaving';
    this.position.x = 0;
    this.position.y = 0;
    this.position.z = 0;
    // this.animations[0]

    loader.load(MODEL, (gltf)=>{
      // mixer = new AnimationMixer( gltf.scene );
      // animationAction = mixer.clipAction(gltf.animations[0]);
      // console.log(gltf.animations);
      // mixer.clipAction( gltf.animations[0] ).play();
      this.add(gltf.scene);
      // this.animations[0] = gltf.animations[0];
      this.mixer = new AnimationMixer( gltf.scene );
      this.mixer.clipAction( gltf.animations[0] ).play();
      // this.add(gltf.animations);
      // mixer.update(delta);
    });
  }
}

// const animations = {
//   wave: function () {
//       setAction(animationAction)
//   }
// }

// const clock = new Clock()

// function animate() {
//   requestAnimationFrame(animate)
//   controls.update()
//   if (modelReady) mixer.update(clock.getDelta())
//   render()

//   stats.update()
// }

// function render() {
//   renderer.render(scene, camera)
// }

// animate()