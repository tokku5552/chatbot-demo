/* eslint-disable react/prop-types */
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));
// 連携テスト
const Answer = (props) => {
  //const classes = useStyles();

  return (
    <Button variant="contained" color="primary" onClick={() => props.select(props.content, props.nextId)}>
      {props.content}
    </Button>
  );
};
export default Answer;
