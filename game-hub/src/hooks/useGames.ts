
import useData, {Fetched} from "./useData";


export interface PlatformProps {
    id:number;
    name: string;
    slug: string;
}

  

const useGames = (selectedGenre: Fetched | null) => useData<Fetched>('/games', {params:{genres:selectedGenre?.id}}, [selectedGenre?.id]); 

export default useGames;