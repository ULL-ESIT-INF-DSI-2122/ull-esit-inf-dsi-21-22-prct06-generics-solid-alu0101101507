import 'chai';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio1/pokemon/pokemon';
import {DB} from '../src/ejercicio1/DB/DB';
import {LOL} from '../src/ejercicio1/LOL/LOL';
import {Universo} from '../src/ejercicio1/Universo/Universo';
import {Combat} from '../src/ejercicio1/combat/combat';
import {Figther} from '../src/ejercicio1/figther/figther';

const Pokemon1 = new Pokemon("Charizard", 90.5, 1.7, "fuego", 84, 78, 100, 780);
const Pokemon2 = new Pokemon("Blastoise", 85.5, 1.6, "agua", 83, 100, 78, 790);
const Pokemon3 = new Pokemon("Venusaur", 80, 1.4, "hierba", 83, 100, 100, 765);
const Pokemon4 = new Pokemon("Raichu", 70, 1.5, "electrico", 90, 55, 110, 650);
const db1 = new DB("Goku", 80, 1.75, 90, 95, 80, 2);
const db2 = new DB("Vegetta", 85, 1.60, 85, 90, 80, 1);
const lol1 = new LOL("Ornn", 80, 2.00, 80, 100, 75, "Late");
const lol2 = new LOL("Sion", 85, 2.67, 100, 95, 85, "Mid");
const lol3 = new LOL("Lucian", 85, 1.70, 150, 95, 60, "Early");
const universo1 = new Universo([Pokemon1, db1, lol1]);
const universo2 = new Universo([Pokemon2, db2, lol2]);

const comba = new Combat(Pokemon1, Pokemon2);
const comba2 = new Combat(db1, db2);
const comba3 = new Combat(lol1, lol2);
const comba4 = new Combat(Pokemon1, db1);
const comba5 = new Combat(lol1, lol3);
const comba6 = new Combat(lol2, lol3);
const comba7 = new Combat(db2, db1);
const comba8 = new Combat(Pokemon3, Pokemon1);
const comba9 = new Combat(Pokemon4, Pokemon2);
const comba10 = new Combat(Pokemon2, Pokemon3);

describe('Clase pokemon', () => {
  it('exite pokemon', () => {
    expect(Pokemon1).to.not.be.eq(null);
  });
  it('es un objeto pokemon1', () => {
    expect(Pokemon1).to.be.an.instanceOf(Pokemon);
  });
  it('puede ser un objeto figther', () => {
    expect(Pokemon1).to.be.an.instanceOf(Figther);
  });
  it('es un objeto pokemon2', () => {
    expect(Pokemon2).to.be.an.instanceOf(Pokemon);
  });
  it('puede ser un objeto figther', () => {
    expect(Pokemon2).to.be.an.instanceOf(Figther);
  });
  it('getName()', () => {
    expect(Pokemon1.getName()).be.eq("Charizard");
  });
  it('getPeso()', () => {
    expect(Pokemon1.getPeso()).be.eq(90.5);
  });
  it('getAltura()', () => {
    expect(Pokemon1.getAltura()).be.eq(1.7);
  });
  it('getTipo()', () => {
    expect(Pokemon1.getTipo()).be.eq("fuego");
  });
  it('getAtaque()', () => {
    expect(Pokemon1.getAtaque()).be.eq(84);
  });
  it('getDefensa()', () => {
    expect(Pokemon1.getDefensa()).be.eq(78);
  });
  it('getVelocidad()', () => {
    expect(Pokemon1.getVelocidad()).be.eq(100);
  });
  it('getHP()', () => {
    expect(Pokemon1.getHP()).be.eq(780);
  });
});


describe('Clase DB', () => {
  it('existe DB', () => {
    expect(db1).to.not.be.eq(null);
  });
  it('existe objeto db1', () => {
    expect(db1).to.be.an.instanceOf(DB);
  });
  it('objeto db1 tambien es figther', () => {
    expect(db1).to.be.an.instanceof(Figther);
  });
  it('existe objeto db2', () => {
    expect(db2).to.be.an.instanceOf(DB);
  });
  it('objeto db2 tambien es un figther', () => {
    expect(db2).to.be.an.instanceOf(Figther);
  });
  it('getName()', () => {
    expect(db1.getName()).to.be.eq("Goku");
  });
  it('getPeso()', () => {
    expect(db1.getPeso()).to.be.eq(80);
  });
  it('getaAltura()', () => {
    expect(db1.getAltura()).to.be.eq(1.75);
  });
  it('getAtaque()', () => {
    expect(db1.getAtaque()).to.be.eq(90);
  });
  it('getDefensa()', () => {
    expect(db1.getDefensa()).to.be.eq(95);
  });
  it('getHP()', () => {
    expect(db1.getHP()).to.be.eq(80);
  });
  it('getPower()', () => {
    expect(db1.getPoder()).to.be.eq(2);
  });
});


describe('Clase LOL', () => {
  it('existe Lol', () => {
    expect(lol1).to.not.be.eq(null);
  });
  it('existe objeto lol1', () => {
    expect(lol1).to.be.an.instanceOf(LOL);
  });
  it('objeto lol1 tambien es figther', () => {
    expect(lol1).to.be.an.instanceof(Figther);
  });
  it('existe objeto lol2', () => {
    expect(lol2).to.be.an.instanceOf(LOL);
  });
  it('objeto lol1 tambien es un figther', () => {
    expect(lol2).to.be.an.instanceOf(Figther);
  });
  it('getName()', () => {
    expect(lol1.getName()).to.be.eq("Ornn");
  });
  it('getPeso()', () => {
    expect(lol1.getPeso()).to.be.eq(80);
  });
  it('getaAltura()', () => {
    expect(lol1.getAltura()).to.be.eq(2.00);
  });
  it('getAtaque()', () => {
    expect(lol1.getAtaque()).to.be.eq(80);
  });
  it('getDefensa()', () => {
    expect(lol1.getDefensa()).to.be.eq(100);
  });
  it('getHP()', () => {
    expect(lol1.getHP()).to.be.eq(75);
  });
  it('getEstado()', () => {
    expect(lol1.getEstado()).to.be.eq("Late");
  });
});

describe('Clase Universo', () => {
  it('existe universo', () => {
    expect(universo1).to.not.be.eq(null);
  });
  it('instancia de universo', () => {
    expect(universo1).to.be.an.instanceof(Universo);
  });
  it('getFigthers()', () => {
    expect(universo1.getFigthers()).to.be.eql([Pokemon1, db1, lol1]);
  });
  it('getFigthers()2', () => {
    expect(universo2.getFigthers()).to.be.eql([Pokemon2, db2, lol2]);
  });
});

describe('Clase Combat', () => {
  it('COmprobar instancia del objeto comba', () => {
    expect(comba).to.be.an.instanceof(Combat);
  });
  it('getFigther1()', () => {
    expect(comba.getFigther1()).to.be.eq(Pokemon1);
  });
  it('getFigther2()', () => {
    expect(comba.getFigther2()).to.be.eq(Pokemon2);
  });
  it('dañoPokemon', () => {
    expect(comba.dañoPokemon(Pokemon1, Pokemon2)).to.be.eql(21);
    expect(comba8.dañoPokemon(Pokemon3, Pokemon1)).to.be.eql(26.602564102564102);
    expect(comba9.dañoPokemon(Pokemon4, Pokemon2)).to.be.eql(90);
    expect(comba10.dañoPokemon(Pokemon2, Pokemon3)).to.be.eql(20.75);
  });
  it('combatePokemon', () => {
    expect(comba.combatePokemon(Pokemon1, Pokemon2)).to.be.eq("Blastoise");
    expect(comba8.combatePokemon(Pokemon3, Pokemon1)).to.be.eq("Charizard");
    expect(comba9.combatePokemon(Pokemon4, Pokemon2)).to.be.eq("Raichu");
    expect(comba10.combatePokemon(Pokemon2, Pokemon3)).to.be.eq("Venusaur");
  });
  it('dañoDB', () => {
    expect(comba2.dañoDB(db1, db2)).to.be.eql(50);
    expect(comba7.dañoDB(db2, db1)).to.be.eql(22.36842105263158);
  });
  it('combateDB', () => {
    expect(comba2.combateDB(db1, db2)).to.be.eq("Goku");
    expect(comba7.combateDB(db2, db1)).to.be.eq("Goku");
  });
  it('dañoLOL', () => {
    expect(comba3.dañoLOL(lol1, lol2)).to.be.eq(4.2105263157894735);
    expect(comba5.dañoLOL(lol1, lol3)).to.be.eq(16.842105263157894);
    expect(comba6.dañoLOL(lol2, lol3)).to.be.eq(5.263157894736842);
  });
  it('combateLOL', () => {
    expect(comba3.combateLOL(lol1, lol2)).to.be.eq("Sion");
    expect(comba5.combateLOL(lol1, lol3)).to.be.eq("Lucian");
    expect(comba6.combateLOL(lol2, lol3)).to.be.eq("Sion");
  });
  it('dañoNeutral', () => {
    expect(comba4.dañoNeutral(Pokemon1, db1)).to.be.eq(17.68421052631579);
  });
  it('combateNeutral', () => {
    expect(comba4.combateNeutral()).to.be.eq("Charizard");
  });
  it('start', () => {
    expect(comba.start()).to.be.eql("Blastoise");
    expect(comba2.start()).to.be.eql("Goku");
    expect(comba3.start()).to.be.eql("Sion");
    expect(comba4.start()).to.be.eql("Charizard");
  });
});

