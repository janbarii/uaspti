import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 50px;
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: white;
  background-color: black;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
  margin-top: 1rem;

  :hover {
    background: rgb(9, 9, 121);
    background: -moz-linear-gradient(
      90deg,
      rgba(9, 9, 121, 1) 0%,
      rgba(0, 212, 255, 1) 0%,
      rgba(7, 56, 152, 1) 0%,
      rgba(0, 154, 255, 1) 0%,
      rgba(0, 26, 60, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(9, 9, 121, 1) 0%,
      rgba(0, 212, 255, 1) 0%,
      rgba(7, 56, 152, 1) 0%,
      rgba(0, 154, 255, 1) 0%,
      rgba(0, 26, 60, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(9, 9, 121, 1) 0%,
      rgba(0, 212, 255, 1) 0%,
      rgba(7, 56, 152, 1) 0%,
      rgba(0, 154, 255, 1) 0%,
      rgba(0, 26, 60, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#090979",endColorstr="#001a3c",GradientType=1);
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: white;
  }
`;
