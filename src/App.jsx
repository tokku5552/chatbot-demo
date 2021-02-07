import React from 'react';
import './assets/style.css';
import { AnswersList } from './components/index';
import defaultDataset from './dataset';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: defaultDataset,
      open: false,
    };
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <AnswersList />
        </div>
      </section>
    );
  }
}
