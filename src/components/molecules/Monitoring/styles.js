import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin: 20px 0;
`;

export const Span = styled.span`
  height: 100%;
  border: none;
  line-height: 40px;
  color: #000;
  font-size: 26px;
  background-color: transparent;
  padding-right: 10px;

  span {
    font-weight: bold;
    font-size: 30px;
    color: #000;
  }
`;

export const Button = styled.button`
  height: 500px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  border-radius: 3px;
  padding: 10px 20px;
  margin-bottom: 30px;
 font-size: 18px;

  background-color: #fff000;

  :hover {
    background-color: #fff059;
  }
`;
