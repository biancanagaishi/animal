BIANCA YOHANA NAGAISHI SHIWA
import { Animal } from "./Animal.js";
import { GatoProps } from "../interfaces/AnimalProps.js";

// Passamos GatoProps para o Generic da classe mãe
export class Gato extends Animal<GatoProps> {

    constructor(props: GatoProps) {
        super(props); // Repassa o objeto de propriedades para a classe mãe
    }

    public getFivFelvTestado(): boolean {
        return this.props.fivFelvTestado;
    }

    public getIsIndoor(): boolean {
        return this.props.isIndoor;
    }
}