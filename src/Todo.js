import React from 'react';
import WorkTable from './WorkTable';
import InputForm from './InputForm';
import { Divider } from 'antd';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      key: 0,
      index: 0
    };
  }

  render() {

    const key = this.state.key;
    const index = this.state.index;

    return (
      <div>
        <InputForm />
        <Divider></Divider>
        <WorkTable
          list={this.state.list}
          key = {key}
          index = {index}
        />
      </div>
    );
  }
}
