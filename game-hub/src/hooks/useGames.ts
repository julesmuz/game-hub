
import { GameQueryProps } from "../App";
import useData, {Fetched} from "./useData";


export interface PlatformProps {
    id:number;
    name: string;
    slug: string;
}

  

const useGames = (gameQuery:GameQueryProps) => useData<Fetched>
('/games', {params:{genres:gameQuery.genre?.id, 
                    platforms: gameQuery.platform?.id,
                     ordering: gameQuery.sortOrder}},
     [gameQuery]); 

export default useGames;