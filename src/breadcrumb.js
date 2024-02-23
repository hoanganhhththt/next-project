export default [
  {
    name: "Trang chủ",
    path: "/",
  },
  {
    name: "Hệ thống danh mục",
    path: "/systems/",
    children: [
      {
        name: "Quản lý tài khoản local",
        path: "/system/account/list",
        children: [
          {
            name: "Thêm mới",
            path: "/system/account/add",
          },
          {
            name: "Cập nhật tài khoản",
            path: "/system/account/edit",
          },
        ],
      },
      {
        name: "Quản lý nhóm quyền local",
        path: "/system/role-group/list",
        // type: "sub",
        children: [
          {
            name: "Thêm mới nhóm quyền",
            path: "/system/role-group/add",
          },
          {
            name: "Chi tiết nhóm quyền",
            path: "/system/role-group/detail",
          },
          {
            name: "Cập nhật nhóm quyền",
            path: "/system/role-group/edit",
          },
        ],
      },
      {
        name: "Quản lý MCC quốc tế",
        path: "/system/business-type/list",
        // type: "sub",
        children: [
          {
            name: "Thêm mới MCC quốc tế",
            path: "/system/business-type/add",
          },
          {
            name: "Cập nhật MCC quốc tế",
            path: "/system/business-type/edit",
          },
        ],
      },
      {
        name: "Quản lý MCC nội địa",
        path: "/system/domestic-business-type/list",
        // type: "sub",
        children: [
          {
            name: "Thêm mới MCC nội địa",
            path: "/system/domestic-business-type/add",
          },
          {
            name: "Cập nhật MCC nội địa",
            path: "/system/domestic-business-type/edit",
          },
        ],
      },
      {
        name: "Quản lý chi nhánh",
        path: "/system/department/list",

        children: [
          {
            name: "Thêm mới chi nhánh",
            path: "/system/department/add",
          },
          {
            name: "Cập nhật chi nhánh",
            path: "/system/department/edit",
          },
        ],
      },
      {
        name: "Quản lý nhân viên",
        path: "/system/staff/list",
        children: [
          {
            name: "Thêm mới nhân viên",
            path: "/system/staff/add",
          },
          {
            name: "Cập nhật nhân viên",
            path: "/system/staff/edit",
          },
        ],
      },
    ],
  },
  {
    name: "Quản lý Merchant",
    path: "/merchant",
    children: [
      {
        name: "Tổng hợp Danh sách Merchant",
        path: "/merchant/list",
        children: [
          // {
          //   name: "Thêm mới Merchant",
          //   path: "/merchant/add",
          // },
          {
            name: "Cập nhật Merchant",
            path: "/merchant/edit",
          },
          {
            name: "Chi tiết Merchant",
            path: "/merchant/detail",
          },
        ],
      },
      {
        name: "Tổng hợp Danh sách Merchant chờ duyệt",
        path: "/merchant/merchant-approve/list",
        // type: "sub",
        children: [
          {
            name: "Chi tiết Merchant chờ duyệt",
            path: "/merchant/merchant-approve/detail",
          },
          {
            name: "Phê duyệt Merchant chờ duyệt",
            path: "/merchant/merchant-approve/approve",
          },
        ],
      },
      {
        name: "Thêm mới Merchant",
        path: "/merchant/add",
      },
      {
        name: "Tổng hợp Danh sách Merchant từ chối",
        path: "/merchant/merchant-cancel/list",
      },
      {
        name: "Quản lý người dùng Web/App",
        path: "/merchant/merchant-web/list",
        type: "sub",
        children: [
          {
            name: "Danh sách người dùng Web/App",
            path: "/merchant/merchant-web/list",
          },
          {
            name: "Thêm mới tài khoản người dùng",
            path: "/merchant/merchant-web/add",
          },
          {
            name: "Cập nhật tài khoản người dùng",
            path: "/merchant/merchant-web/edit",
          },
          {
            name: "Chi tiết tài khoản người dùng",
            path: "/merchant/merchant-web/detail",
          },
        ],
      },
    ],
  },
  {
    name: "Quản lý Terminal",
    path: "/terminal",
    children: [
      {
        name: "Tổng hợp Danh sách Terminal",
        path: "/terminal/list",
        children: [
          {
            name: "Cập nhật Terminal",
            path: "/terminal/edit",
          },
         
          {
            name: "Chi tiết Terminal",
            path: "/terminal/detail",
          },
        ],
      },
      {
        name: "Tổng hợp Danh sách Terminal chờ duyệt",
        path: "/terminal/terminal-pending/list",
        children: [
          {
            name: "Duyệt Terminal",
            path: "/terminal/approve",
          },
        ],
      },
      {
        name: "Thêm mới Terminal",
        path: "/terminal/add",
      },
      {
        name: "Tổng hợp Danh sách Terminal từ chối",
        path: "/terminal/terminal-reject/list",
      },
    ],
  },
  {
    name: "Quản lý QRCode",
    path: "/qrcode",
    children: [
      {
        name: "Danh sách QRCode sản phẩm",
        path: "/qrcode/list-qrcode-product",
        children: [
          {
            name: "Cập nhật QRCode sản phẩm",
            path: "/qrcode/edit-qrcode-product",
          },
          {
            name: "Chi tiết QRCode sản phẩm",
            path: "/qrcode/detail-qrcode-product",
          },
          {
            name: "Kết quả tạo QRCode sản phẩm",
            path: "/qrcode/view-qrcode-result",
          },
        ],
      },
      {
        name: "Danh sách QR code Terminal",
        path: "/qrcode/list-qrcode-terminal",
        children: [
          {
            name: "Chi tiết QR code",
            path: "/qrcode/detail-qrcode-terminal",
          },
          {
            name: "Kết quả tạo QR code",
            path: "/qrcode/create-result-qr-terminal",
          },
        ],
      },
      {
        name: "Tạo QRCode sản phẩm",
        path: "/qrcode/add-qrcode-product",
      },
      {
        name: "Tạo QRCode Terminal",
        path: "/qrcode/add-qrcode-terminal",
      },
    ],
  },
  {
    name: "Quản lí giao dịch",
    path: "/transaction",
    children: [
      {
        name: "Quản lý giao dịch thanh toán",
        path: "/transaction/list-payment",
        children: [
          {
            name: "Chi tiết giao dịch thanh toán",
            path: "/transaction/detail-payment",
          },
          {
            name: "Cập nhật giao dịch thanh toán",
            path: "/transaction/edit-payment",
          },
          {
            name: "Khởi tạo giao dịch hoàn tiền",
            path: "/transaction/init-trans-refund",
          },
        ],
      },
      {
        name: "Quản lý giao dịch hoàn tiền",
        path: "/transaction/list-refund",
        // type: "sub",
        children: [
          {
            name: "Chi tiết giao dịch hoàn tiền",
            path: "/transaction/detail-refund",
          },
          {
            name: "Cập nhật giao dịch hoàn tiền",
            path: "/transaction/edit-refund",
          },
        ],
      },
    ],
  },
  {
    name: "Quản lý chương trình khuyến mãi",
    path: "/voucher/",
    children: [
      {
        name: "Danh sách chương trình khuyến mãi",
        path: "/voucher/list",
        children: [
          {
            name: "Chi tiết chương trình khuyến mãi",
            path: "/voucher/detail"
          },
          {
            name: "Copy chương trình khuyến mãi",
            path: "/voucher/copy"
          },
          {
            name: "Thêm mới chương trình khuyến mãi",
            path: "/voucher/add"
          },
          {
            name: "Cập nhật chương trình khuyến mãi",
            path: "/voucher/edit"
          },
          {
            name: "Duyệt chương trình khuyến mãi",
            path: "/voucher/approve"
          },
        ]
      }
    ]
  },
  {
    name: "Báo cáo",
    path: "/report/",
    children: [
      {
        name: "Báo cáo chi tiết GD thành công",
        path: "/report/for-control/trans-success",
      },
      {
        name: "Báo cáo chi tiết GD hoàn thành công",
        path: "/report/for-control/trans-detail-refund",
      },
      {
        name: "Báo cáo chi tiết giao dịch thành công phát sinh",
        path: "/report/for-control/trans-total",
      },
      {
        name: "Báo cáo đối soát và hạch toán giao dịch",
        path: "/report/for-control/list",
        children: [
          {
            name: "Chi tiết giao dịch đối soát",
            path: "/report/for-control/detail",
          },
        ]
      },
      {
        name: "Báo cáo hạch toán GD hoàn offus",
        path: "/report/for-control/accounting/list",
        children: [
          {
            name: "Chi tiết giao dịch hạch toán GD hoàn offus",
            path: "/report/for-control/accounting/detail",
          },
        ]
      },
      {
        name: "Báo cáo Doanh số chương trình khuyến mãi voucher",
        path: "/report/for-control/promotion",
      },
    ],
  },
  {
    name: "Hỗ trợ",
    path: "/support/",
    children: [
      {
        name: "Lịch sử truy cập ứng dụng",
        path: "/support/app-access/list",
      },
      {
        name: "Phiên truy cập ứng dụng",
        path: "/support/access-session/list",
      },
    ],
  },
  {
    name: "Trang chủ",
    path: "/setting/",
    children: [
      {
        name: "Thông tin người dùng",
        path: "/setting/account-infomation",
      },
      {
        name: "Đổi mật khẩu",
        path: "/setting/change-pass",
      },
    ],
  },
];
