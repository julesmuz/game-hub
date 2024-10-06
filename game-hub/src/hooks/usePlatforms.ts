import useData from "./useData";
import { PlatformProps } from "./useGames";



interface PlatformSelectorProps{
    id: number;
    name: string;
    slug: string;
    background_image:string;
    parent_platforms:{platform: PlatformProps}[]
    metacritic:number;
    image_background: string;
}
const usePlatforms = () => useData<PlatformSelectorProps>('/platforms/lists/parents')

export default usePlatforms;