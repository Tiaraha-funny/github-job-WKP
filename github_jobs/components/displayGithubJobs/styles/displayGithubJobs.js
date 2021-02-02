import styled from "styled-components";

export const Container = styled.section`
  background-color: white;
  margin: 30px;
  color: #334680;
  border-radius: 10px;
`;

export const LinkDetails = styled.div`
  background-color: white;
  display: flex;
  margin: 30px;
  color: #334680;
  border-radius: 10px;
`;

export const Cover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Text = styled.div`
  margin-right: 20px;
`;

export const Loading = styled.div`
  text-align: center;
  font-size: 35px;

  @media (min-width: 1000px) {
    margin-inline-end: 300px;
  }
`;

export const FullTimeBtn = styled.button`
  padding: 8px;
  border: 1px solid #334680;
  border-radius: 5px;
  -webkit-align-self: start;
  -ms-flex-item-align: start;
  align-self: start;
  font-size: 1rem;
  background-color: #fff;
  margin: 15px;
  color: #334680;
  font-weight: 600;
`;

export const Image = styled.img`
  max-width: 150px;
  margin-right: 50px;
`;
export const LocationsAndDates = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: flex-end;
  margin-right: 50px;
  margin-bottom: 20px;
  color: #b9bdcf;
`;
