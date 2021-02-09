import { Button, Form, Input } from 'antd';

export default function InputForm(props) {
  return (
    <div>
      <Form.Item>
        <Input
          placeholder="Give me some information"
          className="todo-input"
          value = {this.state.value}
          onChange={this.handleChangeVal}
        />
      </Form.Item>
      <Button type="primary" onClick={this.addWork} className="submit-btn" disabled={!this.state.value}>Submit</Button>
    </div>
  );
}