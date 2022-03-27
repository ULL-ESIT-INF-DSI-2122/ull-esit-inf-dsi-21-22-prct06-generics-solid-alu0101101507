/* eslint-disable max-len */
/**
 * En esta clase se realizara el calculo del daño y la simulacion del combate de los pokemons
 * @param getFigther1 coger el figther 1 de la clase combat
 * @param getFigther2 coger el figther 2 de la clase combat
 * @param dañoPokemon calculo del daño del combate Pokemon
 * @param combatePokemon turnos del combate pokemon
 * @param dañoDB calculo del daño del combate DB
 * @param combateDB turnos del combate de DB
 * @param dañoLOL calculo del daño del combate LOL
 * @param combateLOL turnos del combate LOL
 * @param dañoNeutral calculo del daño entre universos
 * @param combateNeutral turnos del combate entre universos
 * @param start simulacion del combate
 */
import {Figther} from '../figther/figther';
import {Pokemon} from '../pokemon/pokemon';
import {DB} from '../DB/DB';
import {LOL} from '../LOL/LOL';

export class Combat {
  constructor(protected figther1: Figther, protected figther2: Figther) {

  }

  getFigther1(): Figther {
    return this.figther1;
  }
  getFigther2(): Figther {
    return this.figther2;
  }
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  dañoPokemon(figther1: Pokemon, figther2: Pokemon): number {
    let daño: number = 0;

    if (figther1.getTipo() == 'fuego') {
      if (figther2.getTipo() == 'hierba') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 2;
      } else if (figther2.getTipo() == 'electrico') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 1;
      } else if (figther2.getTipo() == 'fuego') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 0.5;
      } else if (figther2.getTipo() == 'agua') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 0.5;
      }
    }

    if (figther1.getTipo() == 'hierba') {
      if (figther2.getTipo() == 'hierba') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 0.5;
      } else if (figther2.getTipo() == 'electrico') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 1;
      } else if (figther2.getTipo() == 'fuego') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 0.5;
      } else if (figther2.getTipo() == 'agua') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 2;
      }
    }

    if (figther1.getTipo() == 'agua') {
      if (figther2.getTipo() == 'hierba') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 0.5;
      } else if (figther2.getTipo() == 'electrico') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 1;
      } else if (figther2.getTipo() == 'fuego') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 2;
      } else if (figther2.getTipo() == 'agua') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 0.5;
      }
    }

    if (figther1.getTipo() == 'electrico') {
      if (figther2.getTipo() == 'hierba') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 0.5;
      } else if (figther2.getTipo() == 'electrico') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 1;
      } else if (figther2.getTipo() == 'fuego') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 1;
      } else if (figther2.getTipo() == 'agua') {
        daño = 50 * (figther1.getAtaque() / figther2.getDefensa()) * 2;
      }
    }

    return daño;
  }

  combatePokemon(figther1: Pokemon, figther2: Pokemon): string {
    console.log('///////////////////////////////////////Combate Pokemon///////////////////////////////////////////////////////');
    let aux: number = 0;
    let vida1: number = figther1.getHP();
    let vida2: number = figther2.getHP();

    while (vida1 > 0 && vida2 > 0) {
      aux = Math.floor(this.dañoPokemon(figther1, figther2));
      vida2 = Math.floor(vida2 - aux);
      if (vida2 <= 0) {
        console.log(`${figther2.getName()} esta debilitado`);
        break;
      }
      console.log("Combate pokemon");
      // eslint-disable-next-line max-len
      console.log(`${figther1.getName()} tiene esta vida: ${vida1} le ha quitado ${aux} a ${figther2.getName()} y le queda ${vida2}`);

      aux = Math.floor(this.dañoPokemon(figther2, figther1));
      vida1 = Math.floor(vida1 - aux);
      if (vida1 <= 0 ) {
        console.log(`${figther1.getName()} esta debilitado`);
        break;
      }
      console.log("Combate pokemon");
      // eslint-disable-next-line max-len
      console.log(`${figther2.getName()} tiene esta vida: ${vida2} le ha quitado ${aux} a ${figther1.getName()} y le queda ${vida1}`);
    }
    if (vida1 <= 0) {
      console.log(`${figther2.getName()} es el ganador`);
      return figther2.getName();
    } else {
      console.log(`${figther1.getName()} es el ganador`);
      return figther1.getName();
    }
  }

  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  dañoDB(figther1: DB, figther2: DB): number {
    let dañoD: number = 0;

    if (figther1.getPoder() > figther2.getPoder()) {
      dañoD = 25 * (figther1.getAtaque()/figther2.getDefensa()) * 2;
    } else {
      dañoD = 25 *(figther1.getAtaque()/figther2.getDefensa()) * 1;
    }

    return dañoD;
  }


  combateDB(figther1: DB, figther2: DB): string {
    console.log('///////////////////////////////////////Combate Dragon Ball///////////////////////////////////////////////////////');
    let aux: number = 0;
    let vida1: number = figther1.getHP();
    let vida2: number = figther2. getHP();
    while (vida1 > 0 && vida2 > 0) {
      aux = Math.floor(this.dañoDB(figther1, figther2));
      vida2 = Math.floor(vida2 - aux);
      if (vida2 <= 0) {
        console.log(`${figther2.getName()} esta debilitado`);
        break;
      }
      console.log("Combate DB");
      // eslint-disable-next-line max-len
      console.log(`${figther1.getName()} tiene esta vida: ${vida1} le ha quitado ${aux} a ${figther2.getName()} y le queda ${vida2}`);

      aux = Math.floor(this.dañoDB(figther2, figther1));
      vida1 = Math.floor(vida1 - aux);
      if (vida1 <= 0 ) {
        console.log(`${figther1.getName()} esta debilitado`);
        break;
      }
      console.log("Combate DB");
      // eslint-disable-next-line max-len
      console.log(`${figther2.getName()} tiene esta vida: ${vida2} le ha quitado ${aux} a ${figther1.getName()} y le queda ${vida1}`);
    }
    if (vida1 <= 0) {
      console.log(`${figther2.getName()} es el ganador`);
      return figther2.getName();
    } else {
      console.log(`${figther1.getName()} es el ganador`);
      return figther1.getName();
    }
  }

  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  dañoLOL(figther1: LOL, figther2: LOL): number {
    let dañoL: number = 0;

    if (figther1.getEstado() == 'Early') {
      if (figther2.getEstado() == 'Mid') {
        dañoL = 10 *(figther1.getAtaque() / figther2.getDefensa()) * 0.5;
      } else if (figther2.getEstado() == 'Late') {
        dañoL = 10 * (figther1.getAtaque() / figther2.getDefensa()) * 2;
      }
    }

    if (figther1.getEstado() == 'Mid') {
      if (figther2.getEstado() == 'Early') {
        dañoL = 10 * (figther1.getAtaque() / figther2.getDefensa()) * 0.5;
      } else if (figther2.getEstado() == 'Late') {
        dañoL = 10 * (figther1.getAtaque() / figther2.getDefensa()) * 0.5;
      }
    }

    if (figther1.getEstado() == 'Late') {
      if (figther2.getEstado() == 'Early') {
        dañoL = 10 *(figther1.getAtaque() / figther2.getDefensa()) * 2;
      } else if (figther2.getEstado() == 'Mid') {
        dañoL = 10 * (figther1.getAtaque() / figther2.getDefensa()) * 0.5;
      }
    }

    return dañoL;
  }

  combateLOL(figther1: LOL, figther2: LOL): string {
    console.log('///////////////////////////////////////Combate League of Leguends//////////////////////////////////////////////////////');
    let aux: number = 0;
    let vida1: number = figther1.getHP();
    let vida2: number = figther2. getHP();
    while (vida1 > 0 && vida2 > 0) {
      aux = Math.floor(this.dañoLOL(figther1, figther2));
      vida2 = Math.floor(vida2 - aux);
      if (vida2 <= 0) {
        console.log(`${figther2.getName()} esta debilitado`);
        break;
      }
      console.log("Combate LOL");
      // eslint-disable-next-line max-len
      console.log(`${figther1.getName()} tiene esta vida: ${vida1} le ha quitado ${aux} a ${figther2.getName()} y le queda ${vida2}`);

      aux = Math.floor(this.dañoLOL(figther2, figther1));
      vida1 = Math.floor(vida1 - aux);
      if (vida1 <= 0 ) {
        console.log(`${figther1.getName()} esta debilitado`);
        break;
      }
      console.log("Combate LOL");
      // eslint-disable-next-line max-len
      console.log(`${figther2.getName()} tiene esta vida: ${vida2} le ha quitado ${aux} a ${figther1.getName()} y le queda ${vida1}`);
    }
    if (vida1 <= 0) {
      console.log(`${figther2.getName()} es el ganador`);
      return figther2.getName();
    } else {
      console.log(`${figther1.getName()} es el ganador`);
      return figther1.getName();
    }
  }


  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  dañoNeutral(figther1: Figther, figther2: Figther): number {
    let dañoN: number = 0;

    dañoN = 20 * figther1.getAtaque()/figther2.getDefensa();

    return dañoN;
  }

  combateNeutral(): string {
    console.log('///////////////////////////////////////Combate entre universos///////////////////////////////////////////////////////');
    let aux: number = 0;
    let vida1: number = this.figther1.getHP();
    let vida2: number = this.figther2. getHP();
    while (vida1 > 0 && vida2 > 0) {
      aux = Math.floor(this.dañoNeutral(this.figther1, this.figther2));
      vida2 = Math.floor(vida2 - aux);
      if (vida2 <= 0) {
        console.log(`${this.figther2.getName()} esta debilitado`);
        break;
      }
      console.log("Combate entre universos");
      // eslint-disable-next-line max-len
      console.log(`${this.figther1.getName()} tiene esta vida: ${vida1} le ha quitado ${aux} a ${this.figther2.getName()} y le queda ${vida2}`);

      aux = Math.floor(this.dañoNeutral(this.figther2, this.figther1));
      vida1 = Math.floor(vida1 - aux);
      if (vida1 <= 0 ) {
        console.log(`${this.figther1.getName()} esta debilitado`);
        break;
      }
      console.log("Combate entre universos");
      // eslint-disable-next-line max-len
      console.log(`${this.figther2.getName()} tiene esta vida: ${vida2} le ha quitado ${aux} a ${this.figther1.getName()} y le queda ${vida1}`);
    }
    if (vida1 <= 0) {
      console.log(`${this.figther2.getName()} es el ganador`);
      return this.figther2.getName();
    } else {
      console.log(`${this.figther1.getName()} es el ganador`);
      return this.figther1.getName();
    }
  }

  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  start(): string {
    let ganador: string = '';

    if (this.figther1 instanceof Pokemon && this.figther2 instanceof Pokemon) {
      ganador = this.combatePokemon(this.figther1, this.figther2);
    } else if (this.figther1 instanceof DB && this.figther2 instanceof DB) {
      ganador = this.combateDB(this.figther1, this.figther2);
    } else if (this.figther1 instanceof LOL && this.figther2 instanceof LOL) {
      ganador = this.combateLOL(this.figther1, this.figther2);
    } else {
      ganador = this.combateNeutral();
    }
    return ganador;
  }
}
