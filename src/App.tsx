import React from 'react';
import { observer } from "mobx-react";
import styled from "styled-components";

import { getPokemons } from "./api/api";
import { store } from "./helpers/store";
import { AMOUNT_OF_REQUESTS, REQUEST_INTERVAL_MS } from "./consts";

import { Container } from "./components/container/Container";

const AppContainer = styled.div`
    display: flex;
`;

export const App:React.FC = observer(() => {
    if (!store.getPokemonsInterval) {
        if (store.id <= AMOUNT_OF_REQUESTS) {
            store.getPokemonsInterval = window.setInterval(() => getPokemons(store), REQUEST_INTERVAL_MS);
        }
    } else {
        if (store.id >= AMOUNT_OF_REQUESTS) {
            window.clearInterval(store.getPokemonsInterval);
        }
    }

    return (
        <AppContainer>
            <Container store={store} />
        </AppContainer>
    );
});

export default App;
