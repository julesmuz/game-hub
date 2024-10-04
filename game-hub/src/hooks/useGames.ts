
import useData, {Fetched} from "./useData";


export interface PlatformProps {
    id:number;
    name: string;
    slug: string;
}

  

const useGames = () => useData<Fetched>('/games'); 

export default useGames;