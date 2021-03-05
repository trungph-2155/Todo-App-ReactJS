import './App.css';
import React from 'react';
import { Layout, Menu } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Todo from './Todo';
import Weather from './Weather';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

export default class App extends React.Component {


  render(){
    return (
      <Router>
        <Layout className="content-layout">
          <Header>
            <a className="title" href="./">
              To Do App
            </a>
          </Header>
          <Layout>
            <Sider>
              <Menu
                defaultOpenKeys={['sub1']}
                mode="inline"
                className="sidebar"
              >
                <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="Menu">
                  <Menu.Item key="1"><Link to="/todo">Todo</Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/weather">Weather</Link></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content className="todo-container">
              <Switch>
                <Route path="/todo"><Todo/></Route>
                <Route path="/weather"><Weather/></Route>
              </Switch>
            </Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </Router>
    );
  }
}
