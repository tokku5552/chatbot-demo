/* eslint-disable react/prop-types */
import React from 'react';
import { Answer } from './index';

const AnswersList = (props) => {
  return (
    <div className="c-grid__answer">
      {props.answers}
      <Answer content={'hoge'} />
    </div>
  );
};

export default AnswersList;
