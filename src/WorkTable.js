import React from 'react';
import { Button, Table, Space, Tag } from 'antd';
import { setDone, setInProgress, deleteWork } from './redux/actions';
import { connect } from 'react-redux';

const { Column } = Table;

class WorkTable extends React.Component {

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

  setAsDone = (key) => {
    this.props.setDone(key);
  }

  setInProgress = (key) => {
    this.props.setInProgress(key);
  }

  deleteWork = (key) => {
    this.props.deleteWork(key);
  }

  render() {
    return (
      <div>
        <Table dataSource={this.props.works} className="table">
          <Column title="Work" dataIndex="value" key="value" />
          <Column title="Status" dataIndex="status" key="status"
            render={
              (status) => (
                <Tag color={this.colorStatus(status)} key={status}>
                  {status.toUpperCase()}
                </Tag>
              )
            }
          />
          <Column title="Action" key="action"
            render={(text, record, dataIndex) => (
              <Space size="middle">
                <Button onClick={() => this.setAsDone(record.key)} className="submit-btn">Done</Button>
                <Button onClick={() => this.setInProgress(record.key)} className="submit-btn">In Progress</Button>
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

const mapStateToProps = (state) => {
  return {works: state.works}
}

export default connect(
  mapStateToProps,
  { setDone, setInProgress, deleteWork }
)(WorkTable)
