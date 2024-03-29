# Práctica 6 - Clases e interfaces genéricas. Principios SOLID
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101101507/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101101507?branch=main)

Aqui hacemos uso de un ejemplo sencillo de coveralls como lo es este boton



## Ejercicio 1 - El combate definitivo

Para este ejercicio hemos de crear una clase abstracta que definira a los luchadores, es decir tendra elementos en comun que seran utilizados por todos los luchadores que declaremos, a su vez deberemos de cambiar la claase combate previamente hecha para que ahora pueda funcionar con personajes de otros universos, y hemos de crear la clase universo que sera un almacen de luchadores de diferentes universos (yo he reecho la clase pokedex para que se volviera la clase universo) asi pues empezamos por la clase figther:

### Clase figther

```
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
```

en esta clase se define la clase absatracta figther que almacenara los datos y funciones que seran comunes a todos los luchadores, estas funciones seran cambiadas por cada clase hija que seran los luchadores como pokemon,db o lol.

### Clase Pokemon

```
export class Pokemon extends Figther {
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
```

en esta clase definimos a la clase pokemon que hereda de su clase padre figther con super los elementos comunes, que tambien s han de definir en el propio contructor de la clase hija que vayamos a crear, tambien se crean las funciones que corresponden a coger el nombre, la altura, etc, asi pues se va a utilizar esta forma cuando se llame a estos metodos pero que seran sobreescritos en la clase padre tambien pues heredan de ella como si de una plantilla se tratara siempre que una clase llama hara lo que le toque hacer sobre esa plantilla y cuando se llame d otra clase hara lo correspondiente tambien.

### Clase DB

```
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
```

en esta clase al igual que en pokemon tambien heredamos y declaramos las siguientes funciones como getName, getAltura, etc, pero en esta extendemos las clases con una funcion propia y un artibuto propio como son getPoder y poder pues lo utilizaremos durante el combate y el calculo de su daño.


### Clase LOL

```
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
```

volvemos a heredear y declaramos un atributo llamado estado, que sera parecido al atributo tipo de la clase pokemon, que nos dira cual seria el punto mas duerte de ese personaje durante una partida y utilizaremos esa informacion para calcular el daño que se realizara en el combate entre personajes de este universo.

### Clase Universo

```
import {Figther} from '../figther/figther';
export class Universo {
  constructor(protected figthers: Figther[]) {

  }
  getFigthers(): Figther[] {
    return this.figthers;
  }
}
```

en esta clase lo que hacemos es la declaracion de un array que sera donde se almacenaran los diferentes luchadores de los universos y una funcion getFigthers para poder recoger la informacion de todos estos luchadores


### Clase Combat

```
export class Combat {
  constructor(protected figther1: Figther, protected figther2: Figther) {

  }

  getFigther1(): Figther {
    return this.figther1;
  }
  getFigther2(): Figther {
    return this.figther2;
  }
```

En esta clase combat empezaremos por definir a los atributos que formaran parte y seran los luchadores de la clase figther, asi pues podremos recoger su informacion por separado con los getFigther1-2 pero lo importante es el desarrollo del combate, para ello se han realizado una funcion del calculo del daño por cada universo y un calculo de daño neutral que seria la pelea entre universos, tambien cada uno tiene su funcion de combate que nos mostrara quien es el ganador de dicho combate, asi pues empezamos por el combate y el daño de la pelea del universo pokemon:

```
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
```

aqui esta el daño que se realiza en un combate pokemon que se calcula al igual qeu hicimos en prcticas anteriores calculado por tipo y efectividades y consiguiendo asi el daño, ahora vamos a ver el combate y como conseguir al ganador con este daño calculado:

```
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
```

aqui vemos como se realiza el combate pues mientras ambos personajes tengan vida seguira el combate alternando el calculo de daño, esto se hace pasndo a su funcion de daño el orden invertido cada vez el que primero entra a la funcion despues sera el segundo, y asi hasta que ambos lleguen a 0 de vida que se dara por acabado el combate y se retornara el nombre del ganador, asi es como se realiza el combate de todos los uniuversos incluso el combate entre universos, por tanto procedo a poner el resto de codigos de daño y combate:

```
dañoDB(figther1: DB, figther2: DB): number {
    let dañoD: number = 0;

    if (figther1.getPoder() > figther2.getPoder()) {
      dañoD = 25 * (figther1.getAtaque()/figther2.getDefensa()) * 2;
    } else {
      dañoD = 25 *(figther1.getAtaque()/figther2.getDefensa()) * 1;
    }

    return dañoD;
  }
```

aqui utilizamos la variable poder para saber quien es mas fuerte, y por tanto que ese personaje le haga mas daño a su rival en caso de ser mas poderoso, su combate seria de la siguiente manera(todos los combates son iguales solo que cambia la funcion de daño a la que llamamos):

```
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
```

ahora vamos a ir con la funcion de dañoLOL para calcular del daño del universo lol:

```
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
```

Aqui utilizamos el valor del atributo estado para saber cuanto daño se haran entre ellos dependiendo de este estado, como si de los tipos de los pokemons se tratara, y su combate seria asi:

```
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
```

Ahora la funcion start solo nos mostrara quien es el ganador del combate, es decir recogera el nombre del ganador que nos da las funciones combate, y indentificara entre que universos sera la pelea para poder llamar a los diferentes combates y asi conseguir el nombre del ganador de cada combate:

```
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
```