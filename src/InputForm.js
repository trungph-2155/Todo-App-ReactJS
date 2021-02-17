import React from 'react';
import { Button, Form, Input } from 'antd';

export default class InputForm extends React.Component {

  handleChangeVal = (e) => {
    this.props.onValueChange(e.target.value);
  }

  addWork = (e) => {
    e.preventDefault();
    this.props.onSubmitValue();
  }

  render(){
    const value = this.props.value;

    return (
      <div>
        <Form.Item>
          <Input
            placeholder="Give me some information"
            className="todo-input"
            value = {value}
            onChange={this.handleChangeVal}
          />
        </Form.Item>
        <Button type="primary" onClick={this.addWork} className="submit-btn" disabled={!value}>Submit</Button>
      </div>
    );
  }
}