import React, { useEffect } from 'react';

const TidioChat = ({ buttonClassName, onChatButtonClick }) => {
  useEffect(() => {
    function onTidioChatApiReady() {
      window.tidioChatApi.hide();
    }

    if (window.tidioChatApi) {
      window.tidioChatApi.on("ready", onTidioChatApiReady);
    }

    const chatButton = document.querySelector(`.${buttonClassName}`);
    if (chatButton) {
      chatButton.addEventListener("click", onChatButtonClick);
    }

    // Clean-up function to remove event listener if the component unmounts
    return () => {
      if (chatButton) {
        chatButton.removeEventListener("click", onChatButtonClick);
      }
    };
  }, [buttonClassName, onChatButtonClick]);

  return null;
};

export default TidioChat;
