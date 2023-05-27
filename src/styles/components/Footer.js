import styled from "styled-components";

export const MainFooter = styled.footer`
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 60px;
  padding-top: 20px;
  text-align: center;
  justify-content: center;
  background: rgb(9, 9, 121);
  background: linear-gradient(
    90deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 0%,
    rgba(7, 56, 152, 1) 0%,
    rgba(0, 154, 255, 1) 0%,
    rgba(0, 31, 73, 1) 0%
  );

  p {
    text-align: center;
    font-weight: bold;
  }
`;
