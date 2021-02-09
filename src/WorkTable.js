import { Table, Space, Tag } from 'antd';
const {Column} = Table;

export default function WorkTable(props) {
  return (
    <div>
      <Table dataSource={props.list} className="table">
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
                  <button onClick={this.setAsDone.bind(this, dataIndex)}>Set as Done</button>
                  <button onClick={this.setInProgress.bind(this, dataIndex)}>Set as In Progress</button>
                  <button onClick={this.deleteWork.bind(this, record.key)}>Delete</button>
                </Space>
              )
            }
          />
      </Table>
    </div>
  );
}