import styled from "styled-components";

const AppHeader = () => {
  return (
    <Wrapper>
      <h1>
        <a href="#">
          <span>Marvel</span> information portal
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#">
              <span>Characters</span>
            </a>
          </li>
          /
          <li>
            <a href="#">Comics</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

////////////////////////////////
const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  /* width: 1100px; */
  h1 {
    /* width: 288px; */
    height: 37px;
    font-size: 28px;
    line-height: 33px;
  }
  span {
    color: #9f0013;
  }

  nav {
    width: 240px;
  }

  ul {
    display: flex;
    gap: 8px;
    font-size: 24px;
    line-height: 28px;
    width: 105px;
    height: 32px;
  }
`;
export default AppHeader;
