import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 88px;

  background-color: #252f3d;

  @media (max-width: 800px) {
    flex-direction: column;
    height: 150px;
  }

  @media (max-width: 600px) {
    height: 100px;
  }

  .copyright-email--container {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 401px;
    height: 40px;

    gap: 16px;

    @media (max-width: 800px) {
      justify-content: center;
      width: 100%;
      margin-top: 15px;
    }

    .copyright {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      width: fit-content;

      border-right: solid 1px;
      border-color: white;

      @media (max-width: 600px) {
        height: 20px;
      }

      @media (max-width: 400px) {
        height: 15px;
      }

      p {
        font-family: "Manrope";
        font-weight: 400;
        font-size: 16px;
        line-height: 22.4px;

        color: white;

        margin-right: 20px;

        @media (max-width: 600px) {
          font-size: 14px;
        }

        @media (max-width: 400px) {
          font-size: 12px;
        }
      }
    }

    .email {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      width: fit-content;

      p {
        font-family: "Manrope";
        font-weight: 400;
        font-size: 16px;
        line-height: 22.4px;

        color: white;

        @media (max-width: 600px) {
          font-size: 14px;
        }

        @media (max-width: 400px) {
          font-size: 12px;
        }
      }
    }
  }

  .secure-footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 261px;

    gap: 10px;

    @media (max-width: 800px) {
      justify-content: center;
      width: 100%;
      margin-bottom: 15px;
    }

    img {
      width: 16px;
      height: 16px;
    }

    p {
      font-family: "Manrope";
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      color: white;

      @media (max-width: 600px) {
        font-size: 14px;
      }

      @media (max-width: 400px) {
        font-size: 12px;
      }
    }
  }
`;
