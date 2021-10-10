import { Button } from "antd";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  .ant-btn {
    background-color: #1965c0;
    border: none;
    border-radius: ${(props) => props.borderradius || "20px"};
    color: white;

    &:hover {
      background-color: #2187e5;
    }
  }
`;

const ButtonPrimary = ({ children, ...rest }) => {
  const { borderradius } = rest;
  return (
    <ButtonWrapper borderradius={borderradius}>
      <Button {...rest}> {children}</Button>
    </ButtonWrapper>
  );
};

export default ButtonPrimary;
