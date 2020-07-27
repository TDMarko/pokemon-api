import { mount, configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";

import { IStore } from "../../types";

import { Container } from "../container/Container";
import { Wild } from "../pokemons/Wild";
import { Catched } from "../pokemons/Catched";

configure({adapter: new Adapter()});

function getMockedStore() {
    return {
        id: 1,
        getPokemonsInterval: undefined,
        wild: [{
            id: 1,
            name: "testpokemon",
            type: "sometype",
        }],
        catched: [],
    } as IStore;
}

describe("Pokemon tests", () => {
    it("should render container correctly", () => {
        const wrapper = mount(<Container store={getMockedStore()} />);

        expect(wrapper.find(Wild).length).toBe(1);
        expect(wrapper.find(Catched).length).toBe(1);
    });
    it("should have one pokemon in wild pokemons", () => {
        const wrapper = shallow(<Wild store={getMockedStore()} />);

        expect(wrapper.find("[data-role='wild']").length).toBe(1);
    });
});
