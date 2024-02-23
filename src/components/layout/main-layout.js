import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import './main.module.css'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Sidebar from '../Sidebar';
import { useState } from 'react';
const { Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      {/* <Layout> */}
        <Header handleCollapse={(isCollapse) => setIsCollapsed(isCollapse)} />
        <Layout className='main-layout' style={{ flexDirection: 'row' }}>
          <Sidebar className='sidebar' isCollapsed={isCollapsed}/>
          <Content>
            <main>{children}</main>
          </Content>
        </Layout>
        {/* <Footer /> */}
      {/* </Layout> */}
    </>
  );
};

export default MainLayout;