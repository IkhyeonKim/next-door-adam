import { Button } from "antd";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  .ant-btn {
    display: flex;
    align-items: center;

    background-color: #1965c0;
    border: none;
    border-radius: ${(props) => props.borderradius || "20px"};
    color: white;

    &:hover {
      background-color: #2187e5;
    }
  }
  &.super {
    .ant-btn {
      padding: 24px 28px;
      font-size: 1.6rem;
    }
  }
`;

const ButtonPrimary = ({ children, ...rest }) => {
  const { borderradius, buttonSize } = rest;
  return (
    <ButtonWrapper borderradius={borderradius} className={buttonSize}>
      <Button {...rest}> {children}</Button>
    </ButtonWrapper>
  );
};

export default ButtonPrimary;
