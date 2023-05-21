import styled from "styled-components";

export const CardListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  ul {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    overflow-y: auto;
    margin: 0 10px;
  }
  @media (min-width: 900px) {
    max-width: 900px;
    margin: 0 auto;
    margin-top: 20px;
    ul {
      margin: 0;
    }
    @media (min-width: 1200px) {
      justify-content: flex-start;
      align-items: initial;
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 20px;
      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 65px;
        overflow: visible;
        margin: 0;
      }
    }
  }
`;
