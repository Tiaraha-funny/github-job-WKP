import styled from "styled-components";

export const Container = styled.header`
  background-image: url(../../images/backgroundImg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 100%;
  height: 20vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffff;
  border-radius: 5px;
  height: 50px;
  width: 80%;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  width: 80%;

  ::placeholder {
    color: #f0efef;
  }
`;

export const Button = styled.button`
  background-color: #0000ff;
  border: none;
  outline: none;
  padding: 12px;
  width: 90px;
  font-size: 16px;
  color: #fff;
  border-radius: 6px;
  margin-right: 5px;
`;
