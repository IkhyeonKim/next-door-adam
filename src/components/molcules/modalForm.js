import React, { useCallback } from "react";

import { Form, Input, InputNumber, Button, Modal } from "antd";

import ButtonPrimary from "../atoms/button";
import reactDom from "react-dom";
import styled from "styled-components";

const ThankyouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  h1 {
    font-weight: bold;
  }
`;

const getPopupContainer = () => {
  return document.querySelector("#root");
};

const ModalForm = ({ visible, setVisible, product }) => {
  const onFinish = useCallback(
    async (values) => {
      // const response = await fetch("https://getform.io/f/14892587-871e-4bd9-8f44-3d5e291186ff", {
      //   method: "POST", // or 'PUT'
      //   body: new URLSearchParams({
      //     email: values.user.email,
      //     purpose: values.user.purpose,
      //     description: values.user.description,
      //     product,
      //   }),
      // });

      // if (response && response.status === 200) {
      //   // SUCCESS
      //   console.log({ response });
      // }

      openThankYouComponent();
    },
    [product]
  );
  return (
    <Modal
      title="견적 문의하기"
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      getPopupContainer={getPopupContainer}
      footer={[
        <ButtonPrimary htmlType="submit" form="request-form" key="send-btn" borderradius={"4px"}>
          보내기
        </ButtonPrimary>,
      ]}
    >
      <Form id="request-form" onFinish={onFinish}>
        {/* This button can prevent any implicit submission of the form by hitting enter key */}
        <button type="submit" disabled style={{ display: "none" }} aria-hidden="true"></button>
        <Form.Item
          name={["user", "purpose"]}
          label="용도"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="회신받을 이메일"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["user", "description"]} label="간략한 설명">
          <Input.TextArea />
        </Form.Item>
      </Form>
      {/* <form
        id="request-form"
        action="https://getform.io/f/14892587-871e-4bd9-8f44-3d5e291186ff"
        method="post"
        encType="multipart/form-data"
      >
        <input type="name" id="nameInput" name="name" />
        <ButtonPrimary htmlType="submit" form="request-form" key="send-btn" borderradius={"4px"}>
          보내기
        </ButtonPrimary>
        ,
      </form> */}
    </Modal>
  );
};

const ThankYouPage = () => {
  return (
    <ThankyouWrapper>
      <h1>이웃집 아담을 찾아주셔서 감사합니다</h1>
      <h2>아담과 친구들이 최대한 빨리 연락드리겠습니다 :)</h2>
      <div>
        <ButtonPrimary type="link" href="/">
          되돌아가기
        </ButtonPrimary>
      </div>
    </ThankyouWrapper>
  );
};

const openThankYouComponent = () => {
  const rootElement = document.querySelector("#root");

  rootElement.appendChild(document.createElement("div"));
  // console.log("openThankYouComponent", { rootElement });
  return new Promise((resolve, reject) => {
    try {
      reactDom.render(<ThankYouPage />, rootElement);
    } catch (error) {
      reject("Failed to mount PopupForm component");
    }
  }).then((result) => {
    reactDom.unmountComponentAtNode(rootElement);
    rootElement.remove();

    return result;
  });
};

export default ModalForm;
