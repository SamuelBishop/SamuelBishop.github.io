import { Group, SpotLight, PointLight, AmbientLight, HemisphereLight, Color, DirectionalLight } from 'three';

export default class BasicLights extends Group {
  constructor(...args) {
    super(...args);

    //const point = new PointLight(0xFFFFFF, 5, 100, 1);
    const point2 = new SpotLight(0xFFFFFF);
    const point = new SpotLight(0xFFFFFF);
    const point3 = new SpotLight(0xFFFFFF);
    //const point3 = new PointLight(0xFFFFFF, 5, 100, 1);
    // const dir2 = new SpotLight(0xFFFFFF, 1, 7, 0.8, 1, 1);
    const ambi = new AmbientLight( 0x404040 , 0.66);
    const hemi = new HemisphereLight( 0xffffbb, 0x080820, 1.15 )

    // dir.position.set(20, 4, 20);
    // dir.target.position.set(0,1.7,0);

    // dir2.position.set(4, .5, -.6);
    // dir2.target.position.set(0,0,-.6);

    point.position.set(5, 2.2, 5);
    point.target.position.set(0,2.2,0);
    point.intensity = 1.1;

    point3.position.set(-5, 2.2, 5);
    point3.target.position.set(0,2.2,0);
    point3.intensity = 1.1;

    point2.position.set(0, 4, -20);
    point2.target.position.set(0,1.3,0);
    point2.intensity = 1.1;


    // this.add( point, point2, ambi, hemi);
    this.add(point, point2, point3, ambi, hemi);
    // this.add(ambi);

    // this.add(point, ambi, hemi, dir, dir2);

  }
}
