import {Figther} from '../figther/figther';
/**
 * clase que defune a los luchadores del universo dragon ball
 * @param name nombre del luchador
 * @param peso peso del luchador
 * @param altura altura del luchador
 * @param ataque ataque del luchador
 * @param defensa defensa del luchador
 * @param HP vida del luchador
 * @param poder poder de cada luchador
 * @param getName coge el nombre del luchador
 * @param getPeso coge el peso del luchador
 * @param getAltura coge la altura del luchador
 * @param getAtaque coge el ataque del luchador
 * @param getDefensa coge la defensa del luchador
 * @param getHP coge la vida del luchador
 * @param getPoder coge el poder del luchador
 *
 */
export class DB extends Figther {
  constructor(protected name: string, protected peso: number,
    protected altura: number, protected ataque: number,
    protected defensa: number, protected HP: number, protected poder: number) {
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
  getPoder(): number {
    return this.poder;
  }
}
