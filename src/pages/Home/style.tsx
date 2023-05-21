import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
  .pResult {
    font-size: var(--Heading3-font);
    font-weight: var(--Heading3-weight);
  }
  .pResult > span {
    color: var(--grey-50);
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
  }
`;
