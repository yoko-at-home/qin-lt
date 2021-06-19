import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from '../firebase';

const MessageSubmitButton = ({ inputEl, name, setText, text, IsChecked }) => {
  return (
    <IconButton
      style={{ color: "#0a016c" }}
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name, text, IsChecked });
        setText("");
        inputEl.current.focus();
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;