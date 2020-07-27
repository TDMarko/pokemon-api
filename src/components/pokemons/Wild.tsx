import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import { POKEMON_CATCH_LIMIT } from "../../consts";

import { IStore, IPokemon } from "../../types";

import { removeWildPokemon } from "../../helpers/store";
import { getPokemonImageUrl } from "../../helpers/helpers";

const WildContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    width: 30em;
    min-height: 40em;
`;

const PokemonImage = styled.div<{pokemonId: number}>`
    background: url(${props => getPokemonImageUrl(props.pokemonId)}) no-repeat;
    width: 10em;
    height: 10em;
`;

interface WildProps {
    store: IStore;
}

export const Wild: React.FC<WildProps> = observer((props) => {
    const { store } = props;

    function catchPokemon({ id, name, type }: IPokemon) {
        if (store.catched.length < POKEMON_CATCH_LIMIT) {
            removeWildPokemon(id); // move method to the store
            store.catched.push({ id, name, type });
        }
    }

    return (
        <WildContainer>
            {store.wild.map((pokemon: any) => {
                const { id } = pokemon;
                return <PokemonImage data-role="wild" key={id} pokemonId={id} onClick={() => catchPokemon(pokemon)} />
            })}
        </WildContainer>
    )
});


