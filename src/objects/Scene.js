import { Group } from 'three';
import Land from './Land/Land.js';
import Flower from './Flower/Flower.js';
import BasicLights from './Lights.js';
import SamWaving from './Voxels/SamWaving.js';

export default class SeedScene extends Group {
  constructor() {
    super();

    const samWaving = new SamWaving();
    
    // const land = new Land();
    // const flower = new Flower();
    const lights = new BasicLights();
    this.position.x = 0;
    this.position.y = 0;
    this.position.z = 0;
    // this.rotation.y = .5;
    this.add(samWaving, lights);
  }

  // update(timeStamp) {
  //   this.rotation.y = timeStamp / 10000;
  // }
}