import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 120px;
  background-color: var(--grey-0);

  .box {
    max-width: 95%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .boxSearch {
    display: flex;
    padding: 0;
    margin: 0;
  }

  .boxButtons {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      cursor: pointer;
    }
  }

  .boxCart {
    position: relative;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .counter {
    background-color: var(--color-primary);
    border-radius: 5px;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 0;
    right: 0;
  }

  .counter > p {
    text-align: center;
    font-size: var(--Body-font);
    font-weight: var(--Body-weight);
    color: var(--grey-0);
  }

  @media (min-width: 900px) {
    height: 80px;
    margin-bottom: 20px;
    .box {
      flex-direction: row;
      justify-content: space-between;
      max-width: 1200px;
    }
  }
`;
