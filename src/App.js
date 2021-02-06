import './App.css';
import React from 'react';
import { Layout, Menu, Form, Input, Button, Divider, Table } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const columns = [
  {
    title: 'Work',
    dataIndex: 'work',
    key: 'work',
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: [],
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    const count = this.state.list.count + 1;
    const value = this.state.value;
    const item = {key: count, work: value};
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

  render(){
    return (
      <div>
        <Layout className="content-layout">
          <Header>
            <h1 className="title">
              To Do App
            </h1>
          </Header>
          <Layout>
            <Sider>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                className="sidebar"
              >
                <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="Navigation One">
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
                <Button type="primary" onClick={this.handleClick} className="submit-btn" disabled={!this.state.value}>Submit</Button>
              <Divider></Divider>
              <Table dataSource={this.state.list} columns={columns} className="table"/>
              {/* <ul>
                {this.state.list.map(item => (
                  <li key={item.key}>{item.work}</li>
                ))}
              </ul> */}
            </Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}


