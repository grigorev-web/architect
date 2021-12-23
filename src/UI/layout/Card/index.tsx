import { FC } from "react";
import { StyledCard } from "./styles";

const Card: FC = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
