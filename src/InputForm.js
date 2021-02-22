import React from 'react';
import { Button, Form, Input } from 'antd';
import { connect } from 'react-redux';
import { addWork } from './redux/actions';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  handleChangeVal = (input) => {
    this.setState({ input });
  }

  addWork = () => {
    this.props.addWork(this.state.input)
    this.setState({ input: "" });
  }

  render(){
    return (
      <div className="input-container">
        <Form.Item>
          <Input
            placeholder="Give me some information"
            className="todo-input"
            value = {this.state.input}
            onChange={e => this.handleChangeVal(e.target.value)}
          />
        </Form.Item>
        <Button type="primary" onClick={this.addWork} className="submit-btn" disabled={!this.state.input}>Submit</Button>
      </div>
    );
  }
}

export default connect(
  null,
  { addWork }
)(InputForm)
