import styled from "styled-components";

export const MainHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: rgb(9, 9, 121);
  background: linear-gradient(
    90deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 0%,
    rgba(7, 56, 152, 1) 0%,
    rgba(0, 154, 255, 1) 0%,
    rgba(0, 31, 73, 1) 0%
  );
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 2;

  nav {
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    gap: 2rem;
  }

  nav > a {
    text-decoration: none;
    margin-top: 90px;
    color: #f2f2f2;
  }

  nav > a:hover {
    color: cyan;
  }

  nav > img {
    width: 300px;
    height: 200px;
  }

  @media (max-width: 400px) {
    height: 8%;

    nav,
    h3 {
      padding: 1rem;
    }
  }
`;
