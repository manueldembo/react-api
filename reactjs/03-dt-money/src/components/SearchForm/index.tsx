import { MagnifyingGlass } from "phosphor-react";
import { SeacrchFormContainer } from "./styles";

export function SearchForm( ) {
    return (
        <SeacrchFormContainer>
            <input placeholder="Buscar por transações" />

            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SeacrchFormContainer>
    )
}