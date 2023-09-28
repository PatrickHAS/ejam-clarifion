import styled from "styled-components";

export const StyeldStatusCart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 40px;

  margin-top: 70px;

  @media (max-width: 590px) {
    margin-top: 40px;
  }

  @media (max-width: 367px) {
    margin-top: 80px;
  }

  @media (max-width: 328px) {
    margin-top: 100px;
  }

  .offer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: fit-content;
    height: fit-content;

    gap: 10px;

    @media (max-width: 590px) {
      gap: 2px;
    }

    img {
      width: 40px;
      height: 40px;
    }

    p {
      font-family: "Manrope";
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;

      color: black;
    }

    @media (max-width: 1100px) {
      flex-direction: column;
    }

    @media (max-width: 1000px) {
      p {
        font-size: 16px;
      }

      img {
        width: 30px;
        height: 30px;
      }
    }

    @media (max-width: 750px) {
      p {
        font-size: 14px;
      }

      img {
        width: 25px;
        height: 25px;
      }
    }

    @media (max-width: 590px) {
      p {
        font-size: 10px;
      }

      img {
        width: 15px;
        height: 15px;
      }
    }

    @media (max-width: 420px) {
      p {
        font-size: 8px;
      }
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: fit-content;
    height: fit-content;

    gap: 10px;

    @media (max-width: 590px) {
      gap: 2px;
    }

    img {
      width: 40px;
      height: 40px;
    }

    p {
      font-family: "Manrope";
      font-weight: 400;
      font-size: 20px;
      line-height: 22px;

      color: black;
    }

    @media (max-width: 1100px) {
      flex-direction: column;
    }

    @media (max-width: 1000px) {
      p {
        font-size: 16px;
      }

      img {
        width: 30px;
        height: 30px;
      }
    }

    @media (max-width: 750px) {
      p {
        font-size: 14px;
      }

      img {
        width: 25px;
        height: 25px;
      }
    }

    @media (max-width: 590px) {
      p {
        font-size: 10px;
      }

      img {
        width: 15px;
        height: 15px;
      }
    }

    @media (max-width: 420px) {
      p {
        font-size: 8px;
      }
    }
  }
`;
