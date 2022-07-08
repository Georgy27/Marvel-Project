import styled from "styled-components";

const Wrapper = styled.div`
  width: 425px;
  height: 294px;
  p {
    font-family: "Roboto Condensed";
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    padding-top: 25px;
    padding-left: 25px;
  }
  aside {
    width: 375px;
  }
  .skeleton-group {
    display: flex;
    margin-top: 30px;
    height: 40px;
    gap: 9px;
  }
  .skeleton-circle {
    width: 40px;
    background: #c4c4c4;
    border-radius: 50%;
  }
  .skeleton-rectangle__small {
    width: 326px;
    height: 16px;
    background: #c4c4c4;
    align-self: center;
  }

  .skeleton-rectangle__big {
    width: 375px;
    height: 35px;
    background: #c4c4c4;
    margin-top: 15px;
  }
`;

export default Wrapper;
