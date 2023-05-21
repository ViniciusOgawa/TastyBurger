import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .Modal {
    width: 100%;
    margin: 20px 0;
    .ModalHeader {
      background-color: var(--color-primary);
      margin: 0 10px;
      height: 65px;
      padding: 0 20px;
      border-radius: 8px 8px 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .ModalHeader > button {
      font-size: var(--Heading3-font);
      color: var(--grey-0);
    }
    .title {
      font-weight: var(--Heading3-weight);
      font-size: var(--Heading3-font);
      color: var(--grey-0);
    }
    ul {
      height: 300px;
      overflow: auto;
    }
    .bar {
      background-color: var(--grey-20);
      height: 2px;
      width: 100%;
      border-radius: 8px;
    }
    .boxTotal {
      margin: 0 10px;
      background-color: var(--grey-0);
      padding: 20px;
      border-radius: 0 0 8px 8px;
      display: flex;
      flex-direction: column;
    }
    .boxTotal > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
    }
    .boxTotal > div > p {
      font-size: var(--Body-600-font);
      font-weight: var(--Body-600-weight);
    }
    .boxTotal > div > span {
      font-size: var(--Body-600-font);
      font-weight: var(--Body-600-weight);
      color: var(--grey-50);
    }
    .noItensBox {
      margin: 0 10px;
      height: 200px;
      background-color: var(--grey-0);
      padding: 20px;
      border-radius: 0 0 8px 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    .noItensBox > p {
      font-size: var(--Heading3-font);
      font-weight: var(--Heading3-weight);
    }
    .noItensBox > span {
      font-size: var(--Body-font);
      font-weight: var(--Body-weight);
      color: var(--grey-50);
    }
    @media (min-width: 426px) {
      width: 425px;
    }
  }
`;
