import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import { IStore, PokemonType } from "../../types";

import { Catched } from "../pokemons/Catched";
import { Wild } from "../pokemons/Wild";

const Block = styled.div<{type: PokemonType}>`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    background: ${props => props.type === PokemonType.Wild ? "#B38DF0" : "#8BEFCB"};
    width: 30em;
    min-height: 40em;
`;

interface WildProps {
    store: IStore;
}

// this component might be extensive here, but I usually make a layout
export const Container: React.FC<WildProps> = observer((props) => {
    const { store } = props;

    return (
        <>
            <Block type={PokemonType.Wild}>
                <Wild store={store} />
            </Block>
            <Block type={PokemonType.Catched}>
                <Catched store={store} />
            </Block>
        </>
    )
});
