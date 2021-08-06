import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova função')
    }
})

// adicionar essa função aos métodos nativos do jquery via typings.d.ts

$('body').novaFuncao()