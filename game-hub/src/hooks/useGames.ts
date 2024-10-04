import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface PlatformProps {
    id:number;
    name: string;
    slug: string;
}

export interface Fetched {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform: PlatformProps}[]
    metacritic:number;
  }
  
  interface FetchProps {
    count: number;
    results: Fetched[];
  }
const useGames = () => {
    const [games, setGames] = useState<Fetched[]>([]);
    const [error, setError] = useState("");
    //  const [isLoading, setLoading] = useState([]);
  
    useEffect(() => {
        const controller = new AbortController();
      apiClient
        .get<FetchProps>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if(err instanceof CanceledError)return;
            setError(err.message)});

        return () => controller.abort();
    }, []);
    return {games,error};
}

export default useGames;