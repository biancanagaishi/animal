import { Animal } from "./Animal.js";
import { CachorroProps } from "../interfaces/AnimalProps.js";

// Passamos CachorroProps para o Generic da classe mãe
export class Cachorro extends Animal<CachorroProps> {

    constructor(props: CachorroProps) {
        super(props); // Repassa o objeto de propriedades para a classe mãe
    }

    public getPorte(): string {
        return this.props.porte;
    }

    public getPrecisaTosa(): boolean {
        return this.props.precisaTosa;
    }
}