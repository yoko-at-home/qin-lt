import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Sparkles from "react-sparkle";
import { pushMessage } from "../firebase";

const MessageSubmitButton = ({ inputEl, name, setText, text, IsChecked }) => {
  return (
    <div style={{ position: "relative", hover: { cursor: "pointer" } }}>
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
        style={{ color: "white" }}
        disabled={text === ""}
        onClick={() => {
          pushMessage({ name, text, IsChecked });
          setText("");
          inputEl.current.focus();
        }}
      >
        <div
          style={{
            height: "8px",
            position: "relative",
            width: "35px",
          }}
        >
          <SendIcon />
          <div
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
              display: "flex",
              fontSize: ".8rem",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontFamily: "cursive" }}>Send</div>
          </div>
        </div>
      </IconButton>
    </div>
  );
};

export default MessageSubmitButton;
