import Sider from "antd/lib/layout/Sider";
import React from "react";
import navigation from '../../_nav.js';
import { Menu } from "antd";
import { useRouter} from "next/router";

const Sidebar = React.memo((props) => {
  const router = useRouter();
  const { isCollapsed } = props;
  const { items } = navigation;

  const gotoPage = (item) => {
    sessionStorage.clear();
    router.push(item.key);
  };

  return (
    <Sider
      collapsed={isCollapsed}
      className={`${isCollapsed ? "sidebar-close" : "sidebar-open"}`}
      style={{ color: "#ffffff" }}
    >
      <Menu 
        items={items}
        onClick={gotoPage}
        mode="inline"
        defaultSelectedKeys={'/'}
        inlineCollapsed={isCollapsed}
      />
    </Sider>
  )
})

export default Sidebar;

// export async function getStaticProps(context) {
//   // const id = context.params.id;
//   const { navigation } = await import('../../_nav.js');
//   return {
//     props: { items: navigation },
//   };
// }