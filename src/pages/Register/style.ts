import styled from "styled-components";

export const RegisterContainer = styled.div`
  .box {
    width: 95%;
    margin: 0 auto;
  }

  .group {
    display: none;
  }

  .logo {
    height: 50px;
    margin: 20px 0;
  }

  .boxDescription {
    border: 2px solid var(--grey-20);
    border-radius: 5px;
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 15px;
    height: 95px;
    > div {
      background-color: var(--color-primary-50);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 50px;
      border-radius: 5px;
    }

    > p {
      font-size: var(--Body-font);
      font-weight: var(--Body-weight);
      color: var(--grey-50);
      text-align: start;
    }
  }

  @media (min-width: 426px) {
    .box {
      width: 425px;
    }
    @media (min-width: 900px) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      max-width: 1000px;
      margin: 0 auto;
      .group {
        display: flex;
      }
    }
  }
`;
