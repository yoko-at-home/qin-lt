import Sparkles from "react-sparkle";

import { pushMessage } from '../firebase';

const MessageSubmitButton = ({ inputEl, name, setText, text, IsChecked }) => {
  return (
    <div style={{ position: "relative" }}>
      <Sparkles
        color='#CEF9DC'
        count={20}
        minSize={7}
        maxSize={12}
        overflowPx={30}
        fadeOutSpeed={30}
        flicker={false}
      />

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
