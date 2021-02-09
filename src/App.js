import './App.css';
import React from 'react';
import WorkTable from './WorkTable';
import InputForm from './InputForm';
import { Layout, Menu, Divider } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

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
            <InputForm />
            <Divider></Divider>
            <WorkTable list={this.state.list}/>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
