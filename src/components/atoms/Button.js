import { Button } from "antd";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  .ant-btn {
    background-color: #1965c0;
    border: none;
    border-radius: ${(props) => props.borderRadius || "20px"};
    color: white;

    &:hover {
      background-color: #2187e5;
    }
  }
`;

const ButtonPrimary = ({ children, ...rest }) => {
  const { borderRadius } = rest;
  return (
    <ButtonWrapper borderRadius={borderRadius}>
      <Button {...rest}> {children}</Button>
    </ButtonWrapper>
  );
};

export default ButtonPrimary;
