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
      key: 0,
      index: 0
    };
  }

  addWork = () => {
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

  handleChangeVal = (value) => {
    this.setState({ value: value });
  }

  setAsDone = (index) => {
    if(this.state.list.length > 0) {
      this.setState(state => {
        state.list[index].status = "done"
        const list = state.list
        return {
          list,
        };
      });
    }
  }

  setInProgress = (index) => {
    if (this.state.list.length > 0) {
      this.setState(state => {
        state.list[index].status = "in progress"
        const list = state.list
        return {
          list,
        };
      });
    }
    
  }

  deleteWork = (key) => {
    if (this.state.list.length > 0) {
      this.setState(state => {
        const list = state.list.filter(item => item.key !== key);
        return {
          list,
        };
      });
    }
    
  }

  render(){
    const value = this.state.value;
    const key = this.state.key;
    const index = this.state.index;

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
            <InputForm 
              value = {value}
              onValueChange={this.handleChangeVal}
              onSubmitValue = {this.addWork}
            />
            <Divider></Divider>
            <WorkTable
              list={this.state.list}
              key = {key}
              index = {index}
              setDone={this.setAsDone}
              setIP={this.setInProgress}
              delete={this.deleteWork}
            />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
