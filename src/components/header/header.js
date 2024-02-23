import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { KeyOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import Logo from '../../../public/images/logo2.png';
import Avatar from '../../../public/images/user.png';

export const Header = React.memo((props) => {
  const { handleCollapse } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseHeader = () => {
    setIsCollapsed(!isCollapsed);
    handleCollapse(!isCollapsed);
  };

  const handleMenuClick = (e) => {
    switch (e.key) {
      case "myAccount":
        history.push("/setting/account-infomation");
        break;
      case "changePassword":
        history.push("/setting/change-pass");
        break;
      case "logout":
        logoutToDashboard();
        break;
      default:
        break;
    }
  };

  const items = [
    {
      label: "Thông tin tài khoản",
      icon: <UserOutlined />,
      key: "myAccount",
    },
    {
      label: "Đổi mật khẩu",
      icon: <KeyOutlined />,
      key: "changePassword",
    },
    {
      label: "Đăng xuất",
      icon: <PoweroffOutlined />,
      key: "logout",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
    style: { width: "180px" },
  };

  const logoutToDashboard = () => {
    const data = {
      accessToken: localStorage.getItem('token_mms') || '',
      refreshToken: localStorage.getItem('refreshToken_mms') || '',
    }
    logOut(data).finally(() => {
        localStorage.clear();
        sessionStorage.clear();
        history.push('/login');
    });
  };

  
  return (
    <div className="main-header">
      <div className="float-left">
        {isCollapsed ? (
          <MenuUnfoldOutlined onClick={() => handleCollapseHeader()} className="icon-menu-fold" />
        ) : (
          <MenuFoldOutlined onClick={() => handleCollapseHeader()} className="icon-menu-fold" />
        )}
        <span>
          <Image src={Logo} alt="logo" width={120} height={55} style={{ width: 120, marginTop: -14 }} />
        </span>
      </div>
      <div className='text-header'>
        <span>
          <span className="qr-text">QR </span>
          <span className="code-text">Merchant Management</span>
        </span>
      </div>
      {/* <div className="float-right right-content">
        <Dropdown menu={menuProps} className="dropdown-info">
          <span className="ant-dropdown-link cursor-pointer">
            <span className='border-avatar'><img className="avatar" src={Avatar} alt="avatar" /></span>
            <b style={{ color: 'white', marginLeft: '10px' }}>{username}</b>
          </span>
        </Dropdown>
      </div> */}
    </div>
  );
});
