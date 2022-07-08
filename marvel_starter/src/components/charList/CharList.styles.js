import styled from "styled-components";

const Wrapper = styled.div`
  width: 650px;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    column-gap: 25px;

    @media (max-width: 1144px) {
      grid-template-columns: repeat(2, 200px);
    }
  }
  li {
    cursor: pointer;
    width: 200px;
    height: 318px;
    background: #232222;
    margin-top: 31px;
  }
  img {
    width: 200px;
    height: 200px;
  }
  li div {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #ffffff;
    margin-top: 15px;
    margin-left: 15px;

    @media (max-width: 1144px) {
      font-size: 18px;
    }
  }

  .active-char {
    box-shadow: 0 5px 20px #9f0013;
    transform: translateY(-8px);
  }
`;

export default Wrapper;
