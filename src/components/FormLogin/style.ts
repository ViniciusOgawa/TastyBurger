import styled from "styled-components";

export const FormLoginContainer = styled.div`
  margin: 0 auto;
  width: 95%;
  border: 2px solid var(--grey-20);
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .alert {
    font-size: var(--Body-font);
    font-weight: var(--Body-weight);
    color: var(--color-secondary);
  }

  > p {
    font-size: var(--Body-font);
    font-weight: var(--Body-weight);
    color: var(--grey-50);
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    > h1 {
      font-size: var(--Heading1-font);
      font-size: var(--Heading1-weight);
    }
  }

  @media (min-width: 426px) {
    width: 425px;
  }
`;
