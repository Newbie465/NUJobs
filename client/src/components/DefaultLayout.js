import React from 'react';

import { Layout, Menu, Space } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import { AiOutlineHome, AiOutlinePlusSquare, AiOutlineCheckSquare, AiOutlineUser } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { FiUserCheck } from 'react-icons/fi'

const { Header, Sider, Content } = Layout;
// const uid = JSON.parse(localStorage.getItem('user'))._id

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        collapsed: false,
    };
    
  }



  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  logout=()=>{
    localStorage.removeItem('user')
    window.location.reload()
  }

  render() {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} 
        style={{position: 'sticky' , overflow : 'auto' , height:'100%' , top:0, backgroundColor:"white"}}>
          <div className="logo"><h1>{this.state.collapsed? <h1 >NU</h1>:<h1 >NUJobs</h1> }</h1></div>
          
            {!user.isRecruiter ? <div className="">
            <Menu theme="light" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
              <Menu.Item key="/" icon={<AiOutlineHome />}>
                  <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="/appliedjobs" icon={<AiOutlineCheckSquare />}>
                <Link to="/appliedjobs">Applied Jobs</Link>
              </Menu.Item>
              </Menu >
            </div>
              : <div>
              <Menu theme="light" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
              <Menu.Item key="/" icon={<AiOutlineHome />}>
                  <Link to="/">Dashboard</Link>
              </Menu.Item>
                <Menu.Item key="/postjob" icon={<AiOutlinePlusSquare />}>
                  <Link to="/postjob">Post Jobs</Link>
              </Menu.Item>
              
              </Menu >
                
                </div>}
              
              

              

            
    
          
          
          <Menu theme="light" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
             
            <Menu.Item key="/profile" icon={<UserOutlined />}>
                <Link to={`/profile`}>Profile</Link>
            </Menu.Item>
            <Menu.Item key="/logout" icon={<BiLogOut />}>
              <Link onClick={this.logout} to >Logout</Link>
            </Menu.Item>

          </Menu>
          
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, position: 'sticky' , overflow : 'auto' , top:0 , zIndex:9999, backgroundColor: 'white' }}>
            <div className="flex justify-content-between">
              <div>
                {React.createElement(this.state.collapsed ? MenuOutlined : CloseOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
              </div>

              <div>
                {!user.isRecruiter && <Filter />}
                
              </div>

              <div className="flex mt-2">
                {!user.isRecruiter ? 
                  
                  <AiOutlineUser style={{fontSize:25, marginTop:-10, marginRight: 5}}/> : 
                  <FiUserCheck style={{fontSize:25, marginTop:-10, marginRight: 5}}/>

                
                }
                
                <h5 className="mr-3"><b>{user.username}</b></h5>
              </div>

            </div>
          </Header>
          <Content
            className="site-layout-background bkimage"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default DefaultLayout;