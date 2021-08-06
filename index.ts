// até a linha 45 não existe funcionalidade na página.
// const soma = (a: number, b: number) => {
//     return a + b
// }

// interface IAnimal {
//     nome: string,
//     tipo: 'terrestre' | 'aquático',
//     domestico: boolean,
//     executarRugido(alturaEmDecibeis: number): void
// }

// interface IFelino extends IAnimal {
//     visaoNoturno: boolean
// }

// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
//     executarRugido : (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
//     domestico: false,
// }

// const felino: IFelino = {
//     nome: 'Leão',
//     tipo: 'terrestre',
//     visaoNoturno: true,
//     executarRugido : (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
//     domestico: false,
// }

// interface ICanino extends IAnimal {
//     porte: 'pequeno' | 'medio' | 'grande',
// }

// type IDomestico = IFelino | ICanino;

// const dog : IDomestico = {
// domestico: true,
// nome: 'cachorro',
// porte: 'medio',
// tipo: 'terrestre',
// executarRugido : (alturaEmDecibeis) => (`Auuauaw!`),
// }

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', () => {
   const i = event.currentTarget as  HTMLInputElement;
   console.log(i.value)
} )
