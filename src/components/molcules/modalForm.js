import React from "react";

import { Modal } from "antd";
import ButtonPrimary from "../atoms/button";

const getPopupContainer = () => {
  return document.querySelector("#root");
};

const ModalForm = ({ visible, setVisible }) => {
  return (
    <Modal
      title="견적 문의하기"
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      getPopupContainer={getPopupContainer}
      footer={[
        <ButtonPrimary key="send-btn" borderradius={"4px"}>
          보내기
        </ButtonPrimary>,
      ]}
    >
      <p>회신 받을 이메일 주소</p>
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
