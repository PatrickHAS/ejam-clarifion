import styled from "styled-components";

export const StyledTitlePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 10px;

  width: 636px;
  height: 76px;

  @media (max-width: 650px) {
    width: 100%;
  }

  h1 {
    font-family: "Manrope";
    font-size: 48px;
    font-weight: 400;
    line-height: 48px;

    color: black;

    @media (max-width: 1000px) {
      font-size: 38px;
    }

    @media (max-width: 550px) {
      font-size: 28px;
    }
  }

  p {
    font-family: "Manrope";
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;

    color: #4d5254;

    @media (max-width: 1000px) {
      font-size: 18px;
    }

    @media (max-width: 1000px) {
      font-size: 14px;
    }
  }
`;
