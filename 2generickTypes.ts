// com types number
function adicionaApendice(array: number[], valor: number) {
    return array.map(item => item + valor)
}

// com genericTypes
function adicionaApendiceGenerico<T>(array: T[], valor: T) {
    return array.map(() => valor)
}


adicionaApendice([1, 2, 3], 1);

adicionaApendiceGenerico(['a','b'], 'c')