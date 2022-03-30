import 'chai';
import {expect} from 'chai';
import {RandomNumber} from '../src/ejercicioPA101';

// eslint-disable-next-line new-cap
const RandomNumber1 = RandomNumber.getRandomNumber();
//RandomNumber1.getRandomT();

describe('Clase random number', () =>{
  it('RandomNumber1', () => {
    expect(RandomNumber1).to.not.be.eq(null);
  });
  it('random enre 0 y 1', () => {
    expect(RandomNumber1.getRandom()).to.be.eql(Number);
  });
  it('random enre 0 y 1', () => {
    expect(RandomNumber1.getRandomB(6, 5)).to.be.eql(Number);
  });
  it('random enre 0 y 1', () => {
    expect(RandomNumber1.getRandomInt(6, 4)).be.eql(Number);
  });
});

