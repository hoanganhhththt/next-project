import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import './main.module.css'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <>
      {/* <Layout> */}
        <Header />
        <Layout className='main-layout'>
          <Sider className='sidebar'>
            Sider
          </Sider>
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