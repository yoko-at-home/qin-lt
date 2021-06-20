import React, { useRef, useState } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';
import {IsQuestion} from "./IsQuestion";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px",
    backgroundColor: "#e7f5ed",
    backgroundImage:
      "linear-gradient(to right, #f5f7f7, #f1f4f4, #edf1f2, #eaedef, #0C5259);",
    borderRadius: "5px",
    padding: "1rem",
    color: "#fff",
    boxShadow: "0px 0px 12px 1px #f0f0f0",
  },
});

const MessageInputField = ({ name }) => {
  const inputEl = useRef(null);
  const [text, setText] = useState('');
  const classes = useStyles();
  const avatarPath = gravatarPath(name);
  const [IsChecked, setIsChecked] = useState(false);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={9}>
          <MessageField
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
        <Grid item xs={1}>
          <IsQuestion IsChecked={IsChecked} setIsChecked={setIsChecked} />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
            IsChecked={IsChecked}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
