import styled from "styled-components";
import { ApperText } from "./animation";

export const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template-areas: ". box list";
  grid-template-columns: 0.2fr 1fr 4fr;
  align-items: center;
  font-weight: bold;

  position: sticky;
`;
export const Box = styled.li`
  grid-area: box;
  list-style: none;
  text-align: center;
  height: auto;
  animation: ${ApperText} 0.5s cubic-bezier(0.42, 0, 1, 1) both;
`;

export const List = styled.div`
  display: flex;
  grid-area: list;
  letter-spacing: -0.05em;
  justify-content: space-evenly;
`;

export const Atag = styled.a``;
