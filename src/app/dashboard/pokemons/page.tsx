import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
    title: '151 pokemons',
    description: 'Lorem ipsum dolor sit amet consectetur.'
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))

    // throw new Error('Esto es un error que no deberia suceder');

    return pokemons;
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Listado de Pókemons <small className="text-blue-500">Estático</small> </span>

            <PokemonGrid pokemons={ pokemons }></PokemonGrid>
            
        </div>
    );
}