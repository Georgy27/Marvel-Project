import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
  align-items: center;
  /* @media (max-width: 1000px) {
    width: 800px;
  } */
  img {
    width: 180px;
    height: 180px;
    margin-top: 35px;
    margin-left: 40px;
  }
  .randomchar-block {
    display: flex;
    width: 550px;
    /* flex-grow: 1; */
    height: 250px;
    gap: 30px;
    background: #ffffff;

    /* @media (max-width: 1144px) {
      max-width: 500px;
    } */
    @media (max-width: 1144px) {
      flex-direction: column;
      gap: 0px;

      img {
        height: 100px;
        width: 100%;
        margin-top: 0px;
        margin-left: 0px;
        object-fit: cover;
        object-position: 50% 40%;
      }
    }
  }

  .randomchar-info {
    margin-top: 35px;

    @media (max-width: 1144px) {
      margin-top: 0px;
    }
  }
  .randomchar-name {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
  }
  .randomchar-descr {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin-top: 10px;
    margin-bottom: 16px;
    width: 265px;
    height: 90px;

    @media (max-width: 1144px) {
      margin-bottom: 0px;
      margin-top: 0px;
      width: 90%;
      height: 60px;
      font-size: 12px;
    }
  }
  .randomchar-btns {
    display: flex;
    gap: 30px;
  }
  .randomchar-stat {
    position: relative;
    display: flex;
    flex-direction: column;
    /* flex-grow: 1; */
    width: 550px;
    height: 250px;
    background: #232222;

    /* @media (max-width: 1144px) {
      max-width: 500px;
    } */

    button {
      width: 101px;
      height: 38px;
      margin-bottom: 40px;
      margin-left: 40px;
    }

    img {
      position: absolute;
      bottom: 10px;
      right: 0px;
    }
  }
  .randomchar-title {
    width: 374px;
    height: 64px;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    margin-top: 35px;
    margin-left: 40px;

    @media (max-width: 1144px) {
      font-size: 20px;
    }

    @media (max-width: 1000px) {
      font-size: 18px;
    }
  }
`;
export default Wrapper;
