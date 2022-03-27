/**
 * Clase que define a los luchadores del universo lol
 * @param  name nombre del pokemon
 * @param peso peso del pokemon
 * @param altura altura del pokemon
 * @param tipo tipo del pokemon
 * @param ataque ataque del pokemon
 * @param defensa defensa del pokemon
 * @param velocidad velocidad del pokemon
 * @param HP vida del pokemon
 * @param getName sirve para coger el nombre
 * @param getPeso sirve para coger el peso
 * @param getAltura sirve para coger la altura
 * @param getAtaque sirve para coger el ataque
 * @param getDefensa sirve para coger la defensa
 * @param getHP sirve para coger la vida
 * @param getEstado vemos de que estado de la partida es ms fuerte
 */

import {Figther} from '../figther/figther';

export class LOL extends Figther {
  constructor(protected name: string, protected peso: number,
    protected altura: number, protected ataque: number,
    protected defensa: number, protected HP: number, protected estado: string) {
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
  getAtaque(): number {
    return this.ataque;
  }
  getDefensa(): number {
    return this.defensa;
  }
  getHP(): number {
    return this.HP;
  }
  getEstado(): string {
    return this.estado;
  }
}

