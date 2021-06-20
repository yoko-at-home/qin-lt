import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "0.2rem",
    whiteSpace: "nowrap",
    color: "white",
    padding: 0,
  },
});

export const IsQuestion = ({ IsChecked, setIsChecked }) => {
  const classes = useStyles();
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={classes.root}>
      {IsChecked ? (
        <div
          style={{
            fontSize: "0.7rem",
            textShadow: "0px 0px 12px 3px #f0f0f0",
          }}
        >
          解除してコメント
        </div>
      ) : (
        <div
          style={{ fontSize: "0.7rem", textShadow: "0px 0px 12px 3px #f0f0f0" }}
        >
          チェックして質問
        </div>
      )}
      <Checkbox
        checked={IsChecked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
};
