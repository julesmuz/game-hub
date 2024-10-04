import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Fetched {
  id: number;
  name: string;
}

interface FetchProps {
  count: number;
  results: Fetched[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Fetched[]>([]);
  const [error, setError] = useState([]);
  //  const [isLoading, setLoading] = useState([]);

  useEffect(() => {
    apiClient
      .get<FetchProps>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
