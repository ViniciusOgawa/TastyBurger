import styled from "styled-components";

export const CartProductContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  gap: 10px;
  .cartBox {
    width: 100%;
    display: flex;
    padding: 10px;
    justify-content: space-between;
  }
  .cartBox > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .img {
    background-color: var(--grey-20);
    min-width: 80px;
    height: 80px;
    border-radius: 8px;
  }
  h1 {
    font-size: var(--Heading3-font);
    font-weight: var(--Heading3-weight);
  }
  p {
    font-size: var(--Caption-font);
    font-weight: var(--Caption-weight);
    color: var(--grey-50);
  }
  button {
    font-size: var(--Caption-font);
    font-weight: var(--Caption-weight);
    color: var(--grey-50);
    height: 20px;
  }
`;
