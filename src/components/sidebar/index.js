import Sider from "antd/lib/layout/Sider";
import React from "react";

const Sidebar = React.memo((props) => {
  const { isCollapsed } = props;
  return (
    <Sider
      collapsed={isCollapsed}
      className={`${isCollapsed ? "sidebar-close" : "sidebar-open"}`}
      style={{ color: "#ffffff" }}
    >

    </Sider>
  )
})

export default Sidebar;