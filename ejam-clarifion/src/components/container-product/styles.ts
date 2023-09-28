import styled from "styled-components";

export const StyledContainerProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 50px;

  width: 1260px;
  height: fit-content;

  background: #fafafa;

  @media (max-width: 1290px) {
    width: 90%;
  }

  .all-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 95%;
    height: fit-content;
    margin-top: 30px;

    gap: 30px;
  }
  .img-and-comment {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 575px;
    height: 799px;

    gap: 10px;

    @media (max-width: 950px) {
      display: none;
    }

    img {
      width: 100%;
      height: 591;

      border-radius: 10px;
    }

    .commit {
      display: flex;
      justify-content: center;
      border-radius: 10px;
      width: 100%;
      height: fit-content;

      background-color: white;

      @media (max-width: 950px) {
        margin-top: 30px;
      }

      .profile-comment {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 10px;

        gap: 10px;

        width: 91%;

        img {
          width: 237px;
          height: 48px;

          @media (max-width: 980px) {
            width: 207px;
            height: 45px;
          }
        }

        p {
          font-family: "Manrope";
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;

          color: #4d5254;
        }
      }
    }
  }

  .info-product--container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    width: 550px;
    height: 799px;

    gap: 22px;

    @media (max-width: 950px) {
      width: 100%;
      height: fit-content;
    }

    h2 {
      width: 100%;

      font-family: "Manrope";
      font-weight: 400;
      font-size: 32px;
      line-height: 44.8px;

      color: #000000;

      span {
        font-family: "Manrope";
        font-weight: 500;
        font-size: 32px;
        line-height: 44.8px;

        color: #2c7ef8;
      }

      @media (max-width: 950px) {
        text-align: center;
      }

      @media (max-width: 550px) {
        font-size: 22px;
        span {
          font-size: 22px;
        }
      }
    }

    .img-product--mobile {
      display: none;

      width: 100%;

      border-radius: 10px;

      @media (max-width: 950px) {
        display: flex;
      }
    }

    .status-product {
      display: flex;
      justify-content: space-between;
      align-items: center;

      gap: 24px;

      width: 100%;
      height: 135px;

      @media (max-width: 550px) {
        height: 100px;
      }

      @media (max-width: 400px) {
        height: 90px;
      }

      .img-product-small {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;

        width: 110px;
        height: 100%;

        background-color: #2c7ef8;

        @media (max-width: 400px) {
          width: 90px;
          height: 100%;
        }

        img {
          width: 100px;
          height: 100px;

          @media (max-width: 450px) {
            width: 80px;
            height: 80px;
          }

          @media (max-width: 400px) {
            width: 60px;
            height: 60px;
          }
        }
      }

      .status-info {
        display: flex;
        flex-direction: column;

        gap: 7px;

        width: 392px;
        height: 135px;

        @media (max-width: 550px) {
          height: 100px;
        }

        @media (max-width: 950px) {
          width: 100%;
        }

        .name-product {
          display: flex;
          justify-content: space-between;
          align-items: center;

          width: 100%;
          height: fit-content;

          h3 {
            font-family: "Manrope";
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;

            color: #000000;

            @media (max-width: 550px) {
              font-size: 16px;
            }

            @media (max-width: 400px) {
              font-size: 14px;
            }

            @media (max-width: 350px) {
              font-size: 10px;
            }
          }

          .price {
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 90px;

            @media (max-width: 450px) {
              justify-content: flex-end;
              gap: 10px;
            }

            p {
              font-family: "Manrope";
              font-weight: 600;
              font-size: 16px;
              line-height: 21.86px;
              text-decoration: line-through;

              color: #969696;

              @media (max-width: 550px) {
                font-size: 14px;
              }

              @media (max-width: 350px) {
                font-size: 10px;
              }
            }
            span {
              font-family: "Manrope";
              font-weight: 600;
              font-size: 22px;
              line-height: 30.8px;

              color: #2c7ef8;

              @media (max-width: 550px) {
                font-size: 16px;
              }

              @media (max-width: 350px) {
                font-size: 12px;
              }
            }
          }
        }

        img {
          width: 98px;
          height: 18px;

          @media (max-width: 950px) {
            margin-top: 5px;
          }

          @media (max-width: 400px) {
            width: 78px;
            height: 15px;
          }
        }

        .stock-live {
          display: flex;
          justify-content: space-between;
          align-items: center;

          width: 136px;
          height: 22px;

          @media (max-width: 950px) {
            margin-top: 30px;
          }

          @media (max-width: 550px) {
            margin-top: 10px;
          }

          @media (max-width: 400px) {
            justify-content: start;
            gap: 10px;
          }

          .live {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #228be6;
            animation: pulse 1500ms infinite;
          }

          @keyframes pulse {
            0% {
              box-shadow: #a5d8ff 0 0 0 0;
            }
            0% {
              box-shadow: #a5d8ff 0 0 0 6px;
            }
          }
          p {
            font-family: "Manrope";
            font-weight: 400;
            font-size: 16px;
            line-height: 22.4px;

            color: #4d5254;

            @media (max-width: 400px) {
              font-size: 14px;
            }

            @media (max-width: 350px) {
              font-size: 12px;
            }
          }
        }

        .text-status--desktop {
          font-family: "Manrope";
          font-weight: 400;
          font-size: 16px;
          line-height: 22.4px;

          color: #4d5254;

          @media (max-width: 950px) {
            display: none;
          }
        }
      }
    }

    .text-status {
      display: none;
      text-align: center;

      font-family: "Manrope";
      font-weight: 400;
      font-size: 16px;
      line-height: 16.8px;

      color: #4d5254;

      @media (max-width: 950px) {
        display: flex;
      }

      @media (max-width: 450px) {
        font-size: 14px;
      }
    }

    .product-characteristics {
      display: flex;
      flex-direction: column;
      align-items: start;

      gap: 16px;

      width: 100%;
      height: 98px;

      @media (max-width: 361px) {
        gap: 10px;
      }

      p {
        display: flex;
        align-items: center;

        img {
          width: 22px;
          height: 22px;

          @media (max-width: 471px) {
            width: 20px;
            height: 20px;
          }

          @media (max-width: 417px) {
            width: 18px;
            height: 18px;
          }

          @media (max-width: 361px) {
            width: 16px;
            height: 16px;
          }
        }

        gap: 10px;

        font-family: "Manrope";
        font-weight: 400;
        font-size: 16px;
        line-height: 25.6px;

        span {
          font-family: "Manrope";
          font-weight: 700;
          font-size: 16px;
          line-height: 25.6px;

          @media (max-width: 471px) {
            font-size: 14px;
          }

          @media (max-width: 417px) {
            font-size: 12px;
          }

          @media (max-width: 361px) {
            font-size: 10px;
          }
        }

        @media (max-width: 471px) {
          font-size: 14px;
        }

        @media (max-width: 417px) {
          font-size: 12px;
        }

        @media (max-width: 361px) {
          font-size: 10px;
        }
      }
    }

    .status-offer {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 56px;

      gap: 10px;
      border-radius: 10px;

      background-color: #edf3fd;

      img {
        width: 32px;
        height: 32px;

        margin-left: 15px;

        @media (max-width: 560px) {
          width: 25px;
          height: 25px;
        }
      }

      p {
        font-family: "Manrope";
        font-weight: 400;
        font-size: 16px;
        line-height: 22.4px;

        color: #000000;

        span {
          font-family: "Manrope";
          font-weight: 400;
          font-size: 16px;
          line-height: 22.4px;

          color: #2c7ef8;

          @media (max-width: 560px) {
            font-size: 14px;
          }
        }

        @media (max-width: 560px) {
          font-size: 14px;
        }
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 59px;

      border-radius: 50px;
      border-style: none;
      background-color: #59ae43;
      gap: 15px;

      font-family: "Manrope";
      font-weight: 600;
      font-size: 20px;
      line-height: 27.32px;

      color: white;

      cursor: pointer;

      img {
        width: 18px;
        height: 18px;

        @media (max-width: 500px) {
          width: 16px;
          height: 16px;
        }

        @media (max-width: 400px) {
          width: 14px;
          height: 14px;
        }
      }

      @media (max-width: 500px) {
        font-size: 16px;
        height: 49px;
      }

      @media (max-width: 400px) {
        font-size: 14px;
        height: 39px;
        gap: 10px;
      }
    }

    .options-card--container {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 33px;

      border: solid 1px;
      border-color: #cfcfcf;
      border-radius: 4px;

      @media (max-width: 730px) {
        flex-direction: column;
        height: 71px;
      }

      .free-secure--container {
        display: flex;
        justify-content: center;
        align-items: center;

        width: fit-content;
        height: 100%;

        @media (max-width: 730px) {
          width: 100%;
          height: 13px;
        }

        .free-shipping {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100px;

          @media (max-width: 950px) {
            width: 200px;
          }

          @media (max-width: 850px) {
            width: 150px;
          }

          @media (max-width: 730px) {
            width: 70%;
          }

          @media (max-width: 440px) {
            width: 50%;
          }

          p {
            font-family: "Manrope";
            font-weight: 400;
            font-size: 12px;
            line-height: 16.8px;

            color: #4d5254;

            @media (max-width: 730px) {
              font-size: 16px;
            }

            @media (max-width: 580px) {
              font-size: 12px;
            }

            @media (max-width: 440px) {
              font-size: 10px;
            }
          }
        }

        .secure {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 220px;
          gap: 10px;

          border-left: solid 1px;
          border-color: #cfcfcf;

          @media (max-width: 950px) {
            width: 300px;
          }

          @media (max-width: 850px) {
            width: 250px;
          }

          @media (max-width: 730px) {
            width: 100%;
          }

          img {
            width: 12px;
            height: 12px;
          }

          p {
            font-family: "Manrope";
            font-weight: 400;
            font-size: 12px;
            line-height: 16.8px;

            color: #4d5254;

            @media (max-width: 730px) {
              font-size: 16px;
            }

            @media (max-width: 580px) {
              font-size: 12px;
            }

            @media (max-width: 440px) {
              font-size: 10px;
            }
          }
        }
      }

      .cards {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 350px;

        border-left: solid 1px;
        border-color: #cfcfcf;

        @media (max-width: 730px) {
          border-left: solid 0;
          border-top: solid 1px;
          border-color: #cfcfcf;

          width: 90%;

          margin-top: 10px;
        }

        img {
          width: 180px;
          height: 14px;

          @media (max-width: 730px) {
            width: 250px;
            height: 16px;
            margin-top: 10px;
          }

          @media (max-width: 580px) {
            width: 180px;
            height: 14px;
          }
        }
      }
    }

    h4 {
      font-family: "Manrope";
      font-weight: 500;
      font-size: 18px;
      line-height: 24.59px;

      text-align: center;
      text-decoration: underline;
      text-decoration-color: red;
      color: red;

      cursor: pointer;

      @media (max-width: 500px) {
        font-size: 16px;
      }
    }

    .guarantee {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
      height: 88px;

      gap: 16px;

      .logo-guarantee {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        width: 88px;
        height: 88px;

        @media (max-width: 365px) {
          justify-content: center;
        }

        @media (max-width: 349px) {
          justify-content: flex-start;
        }

        img {
          width: 88px;
          height: 88px;

          @media (max-width: 570px) {
            width: 78px;
            height: 78px;
          }

          @media (max-width: 500px) {
            width: 68px;
            height: 68px;
          }

          @media (max-width: 433px) {
            width: 58px;
            height: 58px;
          }

          @media (max-width: 365px) {
            width: 48px;
            height: 48px;
          }
        }
      }

      p {
        font-family: "Manrope";
        font-weight: 400;
        font-size: 16px;
        line-height: 22.4px;

        color: #4d5254;

        @media (max-width: 570px) {
          font-size: 14px;
        }

        @media (max-width: 500px) {
          font-size: 12px;
        }

        @media (max-width: 413px) {
          font-size: 10px;
        }

        @media (max-width: 365px) {
          font-size: 8px;
        }

        span {
          font-family: "Manrope";
          font-weight: 700;
          font-size: 16px;
          line-height: 22.4px;

          color: #4d5254;

          @media (max-width: 570px) {
            font-size: 14px;
          }

          @media (max-width: 500px) {
            font-size: 12px;
          }

          @media (max-width: 413px) {
            font-size: 10px;
          }

          @media (max-width: 365px) {
            font-size: 8px;
          }
        }
      }
    }
  }
`;
