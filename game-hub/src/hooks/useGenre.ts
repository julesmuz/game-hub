
import useData, { Fetched } from "./useData";


export interface PlatformProps {
    id:number;
    name: string;
    slug: string;
}


  

const useGenres = () => useData<Fetched>('/genres'); 

export default useGenres;