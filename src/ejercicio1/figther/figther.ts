// eslint-disable-next-line no-unused-vars
/**
 * Clase que sirve como plantilla para los luchadores
 * @param name nombre del pokemon
 * @param peso peso del pokemon
 * @param altura altura del pokemon
 * @param tipo tipo del pokemon
 * @param ataque ataque del pokemon
 * @param defensa defensa del pokemon
 * @param velocidad velocidad del pokemon
 * @param HP vida del pokemon
 * @param getName definicion de getName
 * @param getPeso definicion abstracta de getPeso
 * @param getAltura definicion abstracta de getAltura
 * @param getAtaque definicion abstrata de getAtaque
 * @param getDefensa definicion abstracta de getDefensa
 * @param getHP definicion abstracta de getHP
 */
export abstract class Figther {
  constructor(protected name: string, protected peso: number,
    protected altura: number, protected ataque: number,
    protected defensa: number, protected HP: number) {
  }
  abstract getName(): string;
  abstract getPeso(): number;
  abstract getAltura(): number;
  abstract getAtaque(): number;
  abstract getDefensa(): number;
  abstract getHP(): number;
}
