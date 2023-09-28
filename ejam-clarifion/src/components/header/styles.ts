import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 96px;

  @media (max-width: 800px) {
    height: 76px;
  }

  @media (max-width: 450px) {
    height: 56px;
  }

  .logo-clarifion {
    width: 192px;
    height: 36px;
    margin-left: 130px;

    @media (max-width: 1000px) {
      margin-left: 15px;
    }

    @media (max-width: 800px) {
      width: 152px;
      height: 26px;
    }

    @media (max-width: 450px) {
      width: 106.67px;
      height: 20px;
    }
  }

  .logo-segurity {
    width: 202px;
    height: 32px;
    margin-right: 130px;

    @media (max-width: 1000px) {
      margin-right: 15px;
    }

    @media (max-width: 800px) {
      width: 172px;
      height: 30px;
    }

    @media (max-width: 450px) {
      width: 101px;
      height: 16px;
    }
  }
`;
