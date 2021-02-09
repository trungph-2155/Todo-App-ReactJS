import './App.css';
import React from 'react';
import { Layout, Menu, Form, Input, Button, Divider, Table, Space, Tag } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const {Column} = Table;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: [],
    };
  }

  addWork = (event) => {
    event.preventDefault();
    const value = this.state.value;
    const count = this.state.list.length;
    const item = {key: count + 1, work: value, status: "new"};
    this.setState(state => {
      const list= state.list.concat(item)
      return {
        list,
        value: '',
      };
    });
  }

  handleChangeVal = (event) => {
    this.setState({ value: event.target.value });
  }

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
    console.log(this.state.list[index]);
    this.setState(state => {
      state.list[index].status = "done"
      const list = state.list
      return {
        list,
      };
    });
  }

  setInProgress = (index) => {
    this.setState(state => {
      state.list[index].status = "in progress"
      const list = state.list
      return {
        list,
      };
    });
  }

  deleteWork = (key) => {
    this.setState(state => {
      const list = state.list.filter(item => item.key !== key);
      return {
        list,
      };
    });
  }

  render(){
    return (
      <div>
        <Layout className="content-layout">
          <Header>
            <a className="title" href="./">
              To Do App
            </a>
          </Header>
          <Layout>
            <Sider>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                className="sidebar"
              >
                <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="Menu">
                  <Menu.ItemGroup key="g1" title="To Do">
                    <Menu.Item key="1">List</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
              </Menu>
            </Sider>
            <Content className="todo-container">
                <Form.Item>
                  <Input 
                    placeholder="Give me some information" 
                    className="todo-input"
                    value = {this.state.value}
                    onChange={this.handleChangeVal}
                  />
                </Form.Item>
                <Button type="primary" onClick={this.addWork} className="submit-btn" disabled={!this.state.value}>Submit</Button>
              <Divider></Divider>
              <Table dataSource={this.state.list} className="table">
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
            </Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}


