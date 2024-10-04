import useData from "./useData";



interface PlatformSelectorProps{
    id: number;
    name: string;
    slug: string;
}
const usePlatforms = () => useData<PlatformSelectorProps>('/platforms/lists/parents')

export default usePlatforms;