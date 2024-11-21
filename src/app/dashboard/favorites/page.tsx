import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";
import { IoHeartOutline } from 'react-icons/io5';

export const metadata = {
    title: 'Favoritos',
    description: 'My Favorite Pokemons'
}

export default async function PokemonsPage() {

    

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Pókemons Favoritos<small className="text-blue-500">Global State</small> </span>

            <FavoritePokemons />
            
        </div>
    );
}
