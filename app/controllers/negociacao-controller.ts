import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{

    //puxando informacoes do HTML para criar a pagina na WEB
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes
    private negociacoesView = new NegociacoesView('#negociacoesView')

    //Construindo a página
    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
        this.negociacoesView.update()
    }

    adiciona(): void {
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        
        const negociacao = new Negociacao(
            date,
            quantidade,
            valor
            )
        
        this.negociacoes.adiciona(negociacao)

        console.log(this.negociacoes.lista())
        console.log(negociacao)
    }
    
    limpaForms(): void {
        alert('limpando formulario')
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }

}