import React from 'react';
import styled from 'styled-components';
import TidioChat from './TidoChat';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 80%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  align-self: flex-start;
  justify-self: flex-start;
  color: #677279;
  font-weight: bolder;
  font-size: 1.6rem;
  transform: translateY(-4rem);
`;
const Text = styled.p `
color: red;
text-transform: uppercase;
text-align: center;
width:100%;

`
const Button = styled.div`
  background: #d72029;
  color: white;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 5px 8px;
  text-transform: uppercase;
  cursor: pointer;
`;
const Modal = ({ onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  const handleChatButtonClick = () => {
    if (window.tidioChatApi) {
      window.tidioChatApi.show();
      window.tidioChatApi.open();
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={handleClose}>X</CloseButton>
        <Text>Payment failed, please contact admin</Text>
        <Button className="chat-button">Open Chat</Button>
        <TidioChat buttonClassName="chat-button" onChatButtonClick={handleChatButtonClick} />
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
