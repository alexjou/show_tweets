import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 80%;
  height: 80%;
  border: none;
  color: #000;
  font-size: 26px;
  background-color: transparent;
  padding: 0 10px;
`;

export const Button = styled.button`
  height: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  border-radius: 3px;
  padding: 10px 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: #00ff2a;
  font-size: 18px;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
`;

export const ButtonClear = styled.button`
  height: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  border-radius: 3px;
  padding: 10px 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: #fff000;
  font-size: 18px;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;