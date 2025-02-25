type PokemonDetail = {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
};

type Pokemon = {
    id: string,
    name: string
};

export async function getPokemon(id: string): Promise<PokemonDetail> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }
    return response.json();
}

export async function getPokemonList() : Promise<Pokemon[]> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }
    const data = await response.json() as {
        results: {name : string, url: string}[]
    };
    
    return data.results.map((pokemon) => ({
        id: pokemon.url.split('/').slice(-2)[0],
        name: pokemon.name
    }));
}