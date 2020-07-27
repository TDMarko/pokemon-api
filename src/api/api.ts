import { IStore } from "../types";

export function getPokemons(store: IStore) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${store.id}`)
        .then(response => response.json())
        // ideally this should be typed, but there is too much to describe
        .then((pokemon: any) => {
            if (pokemon) {
                store.wild.push({
                    id: pokemon.id,
                    name: pokemon.name,
                    type: pokemon.types[0].type.name,
                });
                store.id++;
            }
        });
    // TODO: add error handling here
};
