import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  width: 200px;
  background: gray;
  text-align: center;
  display: flex;
  //flex-direction: column;
`;

export const Title = styled.h1<{primary?: boolean, primaryColor?: boolean}>`
  font-size: 1.5em;
  text-align: center;
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primaryColor ? "black" : "palevioletred"};
`;

export const TomatoTitle = styled(Title)<{primary?: boolean, primaryColor?: boolean}>`
  color: tomato;
  border: 2px solid tomato;
`;

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;
