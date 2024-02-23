import React from 'react';
import {
  SettingOutlined, TeamOutlined, PhoneOutlined, QrcodeOutlined,
  DesktopOutlined, BankOutlined, TransactionOutlined, LineChartOutlined, DeploymentUnitOutlined, DollarOutlined, HomeOutlined,
} from '@ant-design/icons';


export default {
  items : [
    {
      label: 'Trang chủ',
      icon: <HomeOutlined />,
      key: '/',
    },
    {
      label: 'Hệ thống danh mục',
      icon: <SettingOutlined />,
      key: '/system',
      children: [
        {
          label: 'Quản lý tài khoản local',
          key: '/system/account/list',

        },
        {
          label: 'Quản lý nhóm quyền local',
          key: '/system/role-group/list',
        },
        {
          label: 'Quản lý MCC quốc tế',
          key: '/system/business-type/list',
        },
        {
          label: 'Quản lý MCC nội địa',
          key: '/system/domestic-business-type/list',
        },
        {
          label: 'Quản lý chi nhánh',
          key: '/system/department/list',
        },
        {
          label: 'Quản lý nhân viên',
          key: '/system/staff/list',
        },
        
      ],
    },
    {
      label: 'Quản lý Merchant',
      icon: <TeamOutlined />,
      key: '/merchant',
      children: [
        {
          label: 'Tổng hợp DS Merchant',
          key: '/merchant/list',
        },
        {
          label: 'Tổng hợp DS Merchant chờ duyệt',
          key: '/merchant/merchant-approve/list',
        },
        {
          label: 'Thêm mới Merchant',
          key: '/merchant/add',
        },
        {
          label: 'Quản lý người dùng Web/App',
          key: '/merchant/merchant-web/list',
        },
      ],
    },
    {
      label: 'Quản lý Terminal',
      icon: <DesktopOutlined />,
      key: '/terminal',
      children: [
        {
          label: 'Tổng hợp DS Terminal',
          key: '/terminal/list',
        },
        {
          label: 'Tổng hợp DS Terminal chờ duyệt',
          key: '/terminal/terminal-pending/list',
        },
        {
          label: 'Thêm mới Terminal',
          key: '/terminal/add',
        },
        // {
        //   label: 'Tổng hợp DS Terminal từ chối',
        //   key: '/terminal/terminal-reject/list',
        //   ids: [CSKH, KD, DS, KT, DVTT],
        // },
      ],
    },
    {
      label: 'Quản lý QRCode',
      icon: <QrcodeOutlined />,
      key: '/qrcode',
      children: [
        {
          label: 'Danh sách QRCode sản phẩm',
          key: '/qrcode/list-qrcode-product',
        },
        {
          label: 'Tạo QRCode sản phẩm',
          key: '/qrcode/add-qrcode-product',
        },
        {
          label: 'Danh sách QR code Terminal',
          key: '/qrcode/list-qrcode-terminal',
        },
        {
          label: 'Tạo QRCode Terminal',
          key: '/qrcode/add-qrcode-terminal',
        },
      ],
    },
    {
      label: 'Quản lý giao dịch',
      icon: <TransactionOutlined />,
      key: '/transaction',
      children: [
        {
          label: 'Quản lý giao dịch thanh toán',
          key: '/transaction/list-payment',
        },
        {
          label: 'Quản lý giao dịch hoàn',
          key: '/transaction/list-refund',
        },
      ],
    },
    {
      label: 'Quản lý chương trình khuyến mãi',
      icon: <DollarOutlined />,
      key: '/voucher',
      children: [
        {
          label: 'Danh sách chương trình khuyến mãi',
          key: '/voucher/list',
        },
      ],
    },
    {
      label: 'Báo cáo',
      icon: <LineChartOutlined />,
      key: '/report',
      children: [
        {
          label: 'Báo cáo chi tiết GD thành công',
          key: '/report/for-control/trans-success',
        },
        {
          label: 'Báo cáo chi tiết GD hoàn thành công',
          key: '/report/for-control/trans-detail-refund',
        },
        {
          label: 'Báo cáo chi tiết giao dịch thành công phát sinh',
          key: '/report/for-control/trans-total',
        },
        {
          label: 'Báo cáo đối soát và hạch toán giao dịch',
          key: '/report/for-control/list',
        },
        {
          label: 'Báo cáo hạch toán GD hoàn offus',
          key: '/report/for-control/accounting/list',
        },
        {
          label: 'Báo cáo Doanh số chương trình khuyến mãi voucher',
          key: '/report/for-control/promotion',
        },
      ],
    },
  ],
};
