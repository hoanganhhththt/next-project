import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import './main.module.css'
import 'antd/dist/antd.css';
import { Breadcrumb, Layout } from 'antd';
import Sidebar from '../Sidebar';
import { useState } from 'react';
const { Sider, Content } = Layout;
import breadcrumb from '../../breadcrumb';
import { useRouter } from 'next/router';

const MainLayout = ({ children }) => {
  const router = useRouter();
  const pathName = router.pathname;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const recursionBreadcrumb = (breadcrumb, pathName) => {
    const finalBreadcrumb = [];
    breadcrumb.every(item => {
      const { children, ...info } = item;
      if (pathName === info.path || (pathName.includes(info.path) && !children)) {
        finalBreadcrumb.push({
          ...info,
          hasChild: children ? true : false,
        });
        return false;
      }
      if (children) {
        const childBreadcrumb = recursionBreadcrumb(children, pathName);
        if (childBreadcrumb.length !== 0) {
          finalBreadcrumb.push({
            ...info,
            hasChild: true,
          });
          childBreadcrumb.forEach(item => finalBreadcrumb.push(item));
          return false;
        }
      }
      return true;
    })
    return finalBreadcrumb;
  }
  const [arrayBreadcrumb, setArrayBreadcrumb] = useState(
    recursionBreadcrumb(breadcrumb, pathName)
  );

  const renderBreadcrumb = (breadcrumb) =>
    breadcrumb.map((item) => (
      <Breadcrumb.Item key={item.path} items={item.name}>
        {item.name}
      </Breadcrumb.Item>
    ));
  return (
    <>
      {/* <Layout> */}
        <Header handleCollapse={(isCollapse) => setIsCollapsed(isCollapse)} />
        <Layout className='main-layout' style={{ flexDirection: 'row' }}>
          <Sidebar className='sidebar' isCollapsed={isCollapsed}/>
          <Layout className="site-layout">
            <Breadcrumb>{renderBreadcrumb(arrayBreadcrumb)}</Breadcrumb>
            <Content style={{ margin: "40px 0px 16px 16px", clear: "both" }}>
              <main>{children}</main>
            </Content>
          </Layout>
        </Layout>
        {/* <Footer /> */}
      {/* </Layout> */}
    </>
  );
};

export default MainLayout;