import React from "react";
import styled from "styled-components";
import { Modal } from "antd";
import ButtonPrimary from "../atoms/button";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.4);

  z-index: 10;
`;

const ModalForm = ({ visible, setVisible }) => {
  return (
    <Modal
      title="견적 문의하기"
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      footer={[<ButtonPrimary borderRadius={"4px"}>보내기</ButtonPrimary>]}
    >
      <p>회신 받을 이메일 주소</p>
      <p>용도</p>
      <p>대략적인 내용</p>
    </Modal>
  );
};

// const openPopupForm = () => {
//   const wrapper = document.body.appendChild(document.createElement("div"));
//   const rootElement = document.querySelector("#my-price");

//   rootElement.appendChild(document.createElement("div"));
//   console.log("openPopupForm", { rootElement });
//   return new Promise((resolve, reject) => {
//     try {
//       ReactDOM.render(<ModalForm />, rootElement);
//     } catch (error) {
//       reject("Failed to mount PopupForm component");
//     }
//   }).then((result) => {
//     ReactDOM.unmountComponentAtNode(rootElement);
//     rootElement.remove();

//     return result;
//   });
// };

export default ModalForm;
