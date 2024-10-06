import { Heading } from "@chakra-ui/react";
import { GameQueryProps } from "../App";

interface GameHeadingProps {
  gameQuery: GameQueryProps;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
