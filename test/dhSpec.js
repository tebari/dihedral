import dh from 'dihedral';
import {Engine} from './fixtures/engine';
import {Chasis} from './fixtures/chasis';
import {Car} from './fixtures/car';

var garage = dh.angular.module('garage',['dh']);

garage.service('Engine', Engine);
garage.service('Chasis', Chasis);
garage.service('Car', Car);

describe('dh', () => {
  beforeEach(module('garage'));
  
  describe('$injector', () => {

    it('should be able to get a Chasis', inject(['Chasis', (chasis) => {
      expect(chasis).toBeDefined();
      expect(chasis instanceof Chasis).toBe(true);
    }]));

    it('should be able to get an Engine', inject(['Engine', (engine) => {
      expect(engine).toBeDefined();
      expect(engine instanceof Engine).toBe(true);
    }]));

    it('should be able to insantiate Car', inject(['Car', (car) => {
      expect(car instanceof Car).toBe(true);
      expect(car.engine instanceof Engine).toBe(true);
      expect(car.chasis instanceof Chasis).toBe(true);
    }]));
  });

});
