interface Pessoa {
    nome: string,
    idade: number,
    nacionalidade: string,
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{

}

const brasileiro : Brasileiro{
    
}

// see all in :
//  https://www.typescriptlang.org/docs/handbook/intro.html