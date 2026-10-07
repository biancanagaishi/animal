import { AnimalProps } from "../interfaces/AnimalProps.js";

// A classe recebe o Generic <T> para reaproveitar os atributos nas classes filhas
export class Animal<T extends AnimalProps = AnimalProps> {

    // O 'protected' permite que as filhas (Cachorro e Gato) acessem o objeto 'props'
    constructor(protected props: T) {}

    public getNomePaciente(): string {
        return this.props.nomePaciente;
    }

    public getNomeTutor(): string {
        return this.props.nomeTutor;
    }

    public getPesoKG(): number {
        return this.props.pesoKG;
    }

    public setPeso(novoPeso: number): void {
        if (novoPeso <= 0) {
            console.log("\n ERRO: O peso deve ser maior que zero!");
            return;
        }
        this.props.pesoKG = novoPeso;
    }
}
