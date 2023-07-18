//Resumo do projeto: Eu preciso pegar os dados digitados do usuário
//Criar um objeto Negociação com as informações digitadas
//Inserir o objeto Negociação no nosso Objeto Negociações
//Exibir ele na tela

import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form')

form.addEventListener('submit', event => {
    event.preventDefault()
    controller.adiciona()
})

form.addEventListener('reset', event => {
    controller.limpaForms()
})
