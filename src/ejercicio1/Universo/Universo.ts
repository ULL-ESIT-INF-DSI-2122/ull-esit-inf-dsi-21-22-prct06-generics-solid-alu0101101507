/* eslint-disable max-len */
/**
 * Funcion que nos servira como una pokedex para el almacenamiento de informacion de los luchadores
 * @param figthers una lista de todos los luchadores
 * @param getFigthers coger los luchadores de la lista de luchadores
 */
import {Figther} from '../figther/figther';
export class Universo {
  constructor(protected figthers: Figther[]) {

  }
  getFigthers(): Figther[] {
    return this.figthers;
  }
}
