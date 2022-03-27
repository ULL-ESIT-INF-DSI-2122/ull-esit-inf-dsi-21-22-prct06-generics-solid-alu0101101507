/* eslint-disable max-len */
/**
 * En esta clase definiremos un pokemon con las diferentes caracteristicas: nombre, peso, tipo, ataque, defensa, valocidad, damage(HP) y todos os pokemons creados seguiran estos requisitos para su uso
 * @param name nombre del pokemon
 * @param peso peso del pokemon
 * @param altura altura del pokemon
 * @param tipo tipo del pokemon
 * @param ataque ataque del pokemon
 * @param defensa defensa del pokemon
 * @param velocidad velocidad del pokemon
 * @param HP vida del pokemon
 * @param getName funcion para conseguir el nombre del pokemon
 * @param getPeso funcion para conseguir el peso del pokemon
 * @param getAltura funcion para conseguir la altura del pokemon
 * @param getTipo funcion para conseguir el tipo del pokemon
 * @param getAtaque funcion para conseguir el ataque del poquemon
 * @param getDefensa funcion para conseguir la defensa del pokemon
 * @param getVelocidad funcion para conseguir la velocidad el pokemon
 * @param getDamage funcion para conseguir la vida del pokemon
 */
import {Figther} from '../figther/figther';
// eslint-disable-next-line max-len
export class Pokemon extends Figther {
  // eslint-disable-next-line max-len
  constructor(protected name: string, protected peso: number, protected altura: number, protected tipo: string, protected ataque: number, protected defensa: number, protected velocidad: number, protected HP: number) {
    super(name, peso, altura, ataque, defensa, HP);
  }
  getName(): string {
    return this.name;
  }
  getPeso(): number {
    return this.peso;
  }
  getAltura(): number {
    return this.altura;
  }
  getTipo(): string {
    return this.tipo;
  }
  getAtaque(): number {
    return this.ataque;
  }
  getDefensa(): number {
    return this.defensa;
  }
  getVelocidad(): number {
    return this.velocidad;
  }
  getHP(): number {
    return this.HP;
  }
}
