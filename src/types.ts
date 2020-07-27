export enum PokemonType {
    Wild = "wild",
    Catched = "catched",
}

export interface IPokemon {
    id: number;
    name: string;
    type: string;
}

export interface IStore {
    id: number,
    getPokemonsInterval: number | undefined,
    wild: IPokemon[],
    catched: IPokemon[],
}
