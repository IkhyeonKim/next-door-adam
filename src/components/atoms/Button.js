import { Button } from "antd";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  .ant-btn {
    background-color: #1965c0;
    border: none;
    border-radius: 20px;
    color: white;

    &:hover {
      background-color: #2187e5;
    }
  }
`;

const ButtonPrimary = ({ children }) => {
  return (
    <ButtonWrapper>
      <Button>{children}</Button>
    </ButtonWrapper>
  );
};

export default ButtonPrimary;
