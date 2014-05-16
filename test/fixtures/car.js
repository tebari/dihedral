import {Inject} from '../../src/annotations';

export class Car {
  @Inject('Engine', 'Chasis')
  constructor(engine, chasis){
    this.engine = engine;
    this.chasis = chasis;
  }
}
