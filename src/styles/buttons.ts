import styled from "styled-components";
import { Link as LinkStyled } from "react-router-dom";

export const DefaultButtonGreen = styled.button`
  padding: 20px;
  font-size: var(--Headline-font);
  font-weight: var(--Headline-weight);
  color: var(--grey-0);
  border: none;
  border-radius: 8px;
  background-color: var(--color-primary);
  font-family: "Inter", sans-serif;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-50);
  }
`;

export const DefaultButtonGrey = styled.button`
  padding: 20px;
  font-size: var(--Headline-font);
  font-weight: var(--Headline-weight);
  color: var(--grey-50);
  border: none;
  border-radius: 8px;
  background-color: var(--grey-20);
  font-family: "Inter", sans-serif;
  cursor: pointer;

  &:hover {
    color: var(--grey-20);
    background-color: var(--grey-50);
  }
`;

export const MediumButtonGreen = styled.button`
  padding: 10px 20px;
  font-size: var(--Headline-font);
  font-weight: var(--Headline-weight);
  color: var(--grey-0);
  border: none;
  border-radius: 8px;
  background-color: var(--color-primary);
  font-family: "Inter", sans-serif;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-50);
  }
`;

export const MediumButtonGrey = styled.button`
  padding: 10px 20px;
  font-size: var(--Headline-font);
  font-weight: var(--Headline-weight);
  color: var(--grey-50);
  border: none;
  border-radius: 8px;
  background-color: var(--grey-20);
  font-family: "Inter", sans-serif;
  cursor: pointer;

  &:hover {
    color: var(--grey-20);
    background-color: var(--grey-50);
  }
`;

export const Link1 = styled(LinkStyled)`
  padding: 10px 20px;
  font-size: var(--Headline-font);
  font-weight: var(--Headline-weight);
  color: var(--grey-50);
  border: none;
  border-radius: 8px;
  background-color: var(--grey-20);
  font-family: "Inter", sans-serif;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: var(--grey-20);
    background-color: var(--grey-50);
  }
`;

export const Link2 = styled(LinkStyled)`
  text-decoration: underline;
  font-size: var(--Body-font);
  font-weight: var(--Body-weight);
  color: var(--grey-50);
`;
