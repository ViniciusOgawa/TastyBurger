import styled from "styled-components";

export const ProductContainer = styled.li`
  min-width: 250px;
  height: 346px;
  border: 1px solid var(--grey-20);
  border-radius: 8px;

  .boxImg {
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-20);
  }

  img {
    border-radius: 8px 8px 0 0;
    height: 100%;
  }

  .box {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .box > h1 {
    font-size: var(--Heading3-font);
    font-weight: var(--Heading3-weight);
  }

  .box > p {
    font-size: var(--Caption-font);
    font-weight: var(--Caption-weight);
    color: var(--grey-50);
  }

  .box > span {
    font-size: var(--Body-600-font);
    font-weight: var(--Body-600-weight);
    color: var(--color-primary);
  }
`;
