import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  max-width: 425px;
  width: -webkit-fit-content;
  height: -webkit-fit-content;
  width: -moz-fit-content;
  height: -moz-fit-content;
  /* background: #ffffff; */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  margin-top: 31px;
  padding-left: 25px;
  padding-top: 25px;
  padding-bottom: 25px;

  .char__basics {
    display: flex;
    img {
      width: 150px;
      height: 150px;
    }
  }

  .char__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 25px;
  }
  .char__info-name {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-transform: uppercase;
    color: #000000;

    @media (max-width: 1144px) {
      font-size: 18px;
    }
  }
  .char__btns {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 101px;
  }

  .char__descr {
    width: 375px;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin-top: 15px;
  }

  .char__comics {
    width: 59px;
    height: 24px;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    margin-top: 10px;
  }

  li {
    width: 375px;
    margin-top: 10px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    padding: 4px;
  }
`;

export default Wrapper;
