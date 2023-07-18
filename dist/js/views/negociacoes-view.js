export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    } // crio um parametro que no controller eu chamo no nome da classe lá no HTML
    template() {
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
        `;
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
}
