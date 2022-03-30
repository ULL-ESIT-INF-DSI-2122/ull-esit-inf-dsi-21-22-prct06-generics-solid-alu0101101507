/**
 * Clase que define un numero aleatorio
 */
export class RandomNumber {
  /**
   * Declaracion de random number
   */
  private static RandomNumber:RandomNumber;
  private constructor() {

  }
  public static getRandomNumber(): RandomNumber {
    if (!RandomNumber.RandomNumber) {
      RandomNumber.RandomNumber = new RandomNumber();
    }
    return RandomNumber.RandomNumber;
  }
  /**
   * Obtener un numero aleatorio flotante entre [0,1]
   * @returns numero flotante
   */
  getRandom() {
    return Math.random();
  }

  /**
    * Obener un numero floante aleatorio entre un rango
    * @param n maximo
    * @param m minimo
    * @returns numero flotante aleatorio entre el rango
    */
  getRandomB(n: number, m: number) {
    return Math.random() * (n - m);
  }

  /**
   * Obtener un numero aleatorio entero entre un rango
   * @param n maximo
   * @param m minimo
   * @returns numero entero aleatorio entre el rango
   */
  getRandomInt(n: number, m: number) {
    return Math.floor(Math.random() * (n - m + 1)) + m;
  }
}

// eslint-disable-next-line new-cap
const RandomNumber1 = RandomNumber.getRandomNumber();

console.log(RandomNumber1.getRandom());
console.log(RandomNumber1.getRandomB(6, 5));
console.log(RandomNumber1.getRandomInt(6, 4));

