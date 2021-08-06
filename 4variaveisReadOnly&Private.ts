interface Cachorro {
  nome: string,
  idade: number,
  parqueFavorito?: string,
}
// adicionando a propriedade readonly na interface cachorro, 
//  readonly [K in keyof Cachorro]-? : Cachorro[K]
//  tornaria parqueFavorito "obrigatorio" ( -? )
type CachorroSomenteLeitura = {
  readonly [K in keyof Cachorro] : Cachorro[K];
}

class meuCachôro implements CachorroSomenteLeitura {
  idade;
  nome;
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new meuCachôro('Bob', 1)
console.log(cao)