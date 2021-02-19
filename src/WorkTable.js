import React from 'react';
import { Button, Table, Space, Tag } from 'antd';
const {Column} = Table;

export default class WorkTable extends React.Component {

  colorStatus = (status) => {
    switch (status) {
      case "done":
        return "green";
      case "in progress":
        return "gold";
      default:
        return "cyan";
    }
  }

  setAsDone = (index) => {
    this.props.setDone(index);
  }

  setInProgress = (index) => {
    this.props.setIP(index);
  }

  deleteWork = (key) => {
    this.props.delete(key);
  }

  render(){
    return (
      <div>
        <Table dataSource={this.props.list} className="table">
            <Column title="Work" dataIndex="work" key="work"/>
            <Column title="Status" dataIndex="status" key="status"
              render = {
                (status) => (
                  <Tag color={this.colorStatus(status)} key={status}>
                    {status.toUpperCase()}
                  </Tag>
                )
              }
            />
            <Column title="Action" key="action"
              render = {(text, record, dataIndex) => (
                  <Space size="middle">
                    <Button onClick={() => this.setAsDone(dataIndex)} className="submit-btn">Done</Button>
                    <Button onClick={() => this.setInProgress(dataIndex)} className="submit-btn">In Progress</Button>
                    <Button onClick={() => this.deleteWork(record.key)} className="submit-btn">Delete</Button>
                  </Space>
                )
              }
            />
        </Table>
      </div>
    );
  }
}
