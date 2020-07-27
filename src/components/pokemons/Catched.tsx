import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import { IStore, IPokemon } from "../../types";

import { removeCatchedPokemon } from "../../helpers/store";
import { getPokemonImageUrl } from "../../helpers/helpers";

const CatchedContainer = styled.div`
    width: 30em;
    min-height: 40em;
`;

const PokemonContainer = styled.div`
    display: flex;
`;

const PokemonImage = styled.div<{pokemonId: number}>`
    background: url(${props => getPokemonImageUrl(props.pokemonId)}) no-repeat;
    background-size: cover;
    width: 10em;
    height: 10em;
`;

const Description = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    font-size: 0.8em;
`;

interface CatchedProps {
    store: IStore;
}

export const Catched: React.FC<CatchedProps> = observer((props) => {
    const { store } = props;

    function releasePokemon({ id, name, type }: IPokemon) {
        if (store.catched.length > 0) {
            removeCatchedPokemon(id); // move method to the store
            store.wild.push({ id, name, type }); // add ids as keys to make this sorted right way
        }
    }

    return (
        <CatchedContainer>
            {store.catched.map((pokemon: IPokemon) => {
                const { id, name, type } = pokemon;

                return (
                    <PokemonContainer>
                        <PokemonImage key={id} pokemonId={id} onClick={() => releasePokemon(pokemon)} />
                        <Description>
                            <div>Id: {id}</div>
                            <div>Name: {name}</div>
                            <div>Type: {type}</div>
                        </Description>
                    </PokemonContainer>
                )
            })}
        </CatchedContainer>
    )
});
