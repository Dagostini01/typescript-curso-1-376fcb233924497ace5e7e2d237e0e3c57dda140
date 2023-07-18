export class NegociacoesView {

    private elemento: HTMLElement
    
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)
    }// crio um parametro que no controller eu chamo no nome da classe lá no HTML

    template() : string {
        return `
        <table class="table table-hover table-bodered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        `
    }

    update(): void {
        this.elemento.innerHTML = this.template()
    }

}