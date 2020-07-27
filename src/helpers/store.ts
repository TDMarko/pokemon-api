import { action, observable } from "mobx";

import { IStore, IPokemon } from "../types";

export const store:IStore = observable({
    id: 1, 
    getPokemonsInterval: undefined,
    wild: [],
    catched: [], 
});

export const removeWildPokemon = action((id: any) => {
    store.wild.forEach((pokemon: IPokemon, idx: number) => {
        if (pokemon.id === id) {
            store.wild.splice(idx, 1);
        }
    })
});

export const removeCatchedPokemon = action((id: any) => {
    store.catched.forEach((pokemon: IPokemon, idx: number) => {
        if (pokemon.id === id) {
            store.catched.splice(idx, 1);
        }
    })
});
