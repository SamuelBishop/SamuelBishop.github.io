import { Group, AmbientLight, HemisphereLight, DirectionalLight } from 'three';

export default class BasicLights extends Group {
  constructor(...args) {
    super(...args);

    const keyLight = new DirectionalLight(0xffffff, .5)
    keyLight.position.set(2, 3, 7);
    keyLight.target.position.set(0, 1.7, 0);
    const fillLight = new DirectionalLight(0xffffff, .3)
    fillLight.position.set(-2,3, 7);
    fillLight.target.position.set(0, 1.7, 0);
    const backLight = new DirectionalLight(0xffffff, .3)
    backLight.position.set(0, 7, -10);
    backLight.target.position.set(0, 1.7, 0);
    const ambi = new AmbientLight( 0x080820 , 1);
    const hemi = new HemisphereLight( 0xfdfbd3 , 0xfdfbd3, 1.4 )

    this.add(ambi, hemi, keyLight, fillLight, backLight);
  }
}
