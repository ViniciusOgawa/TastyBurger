import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  justify-content: space-between;
  border: 2px solid var(--grey-20);
  height: 60px;
  width: 100%;
  padding: 10px;
  border-radius: 8px;

  &:focus-within {
    border: 2px solid var(--grey-100);
  }

  input {
    border: none;
    background-color: transparent;
    width: 55%;
    padding-left: 10px;
    font-size: var(--Headline-font);
    font-weight: var(--Headline-weig);
  }

  @media (min-width: 769px) {
    width: 340px;
  }
`;
