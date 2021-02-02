import styled from "styled-components";

export const Form = styled.form`
  margin-top: 30px;
  margin-bottom: 40px;
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;

  ::placeholder {
    color: #b9bdcf;
    font-size: 16px;
    margin-top: 10px;
  }
`;
export const Title = styled.label`
  color: #b9bdcf;
  font-size: 30px;
  line-height: 80px;
  font-weight: 600;
`;

export const Cover = styled.div`
  box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
  padding: 4px 5px 4px 17px;
  height: 48px;
  background-color: #fff;
  border-radius: 4px;
  width: 125%;
  display: flex;
  img {
    width: 25px;
  }
`;
