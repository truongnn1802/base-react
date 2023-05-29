import {
  ROUTE_PATH_LOGIN,
  ROUTE_PATH_CHANGEPASSWORD,
  ROUTE_PATH_CREATE_ACCOUNT,
  ROUTE_DS_CBGV,
  ROUTE_PATH_CREATE_PHONGBAN,
  ROUTE_PATH_CREATE_BOMON,
  ROUTE_PATH_DS_GV
} from 'src/routes/constant'

export const MENU_NAV = [
  { name: 'Phân quyền chức năng', to: '/' },
  {
    name: 'Quản lý tài khoản người dùng',
    to: '#',
    childrens: [
      {
        // group: 'group1',
        items: [{ name: 'Tạo tài khoản cán bộ, giáo viên', to: ROUTE_PATH_CREATE_ACCOUNT }]
      }
    ]
  },
  {
    name: 'Quản trị giao diện',
    // to: '/quan-tri/',
    childrens: [
      {
        group: 'group1',
        items: [
          { name: 'children1', to: '/' },
          { name: 'children2', to: '/' }
        ]
      },
      {
        group: 'group2',
        items: [
          { name: 'children1', to: '/' },
          { name: 'children2', to: '/' }
        ]
      }
    ]
  },
  { name: 'test', to: '/test' }
]

export const MENU_SIDE_NAV = {
  // 'quan-tri-he-thong': [
  //   { name: 'Phân quyền chức năng', to: '/' },
  //   {
  //     name: 'Quản trị nội dung',
  //     to: '#',
  //     childrens: [
  //       {
  //         group: 'Quản lý bài viết tĩnh',
  //         items: [
  //           { name: 'Bài viết giới thiệu', to: ROUTE_PATH_CREATE_ACCOUNT },
  //           { name: 'Mục tiêu sứ mệnh', to: '/' }
  //         ]
  //       },
  //       {
  //         group: 'Quản lý bài viết',
  //         items: [
  //           { name: 'Chuyên mục bài viết', to: ROUTE_PATH_CREATE_ACCOUNT },
  //           { name: 'Bài viết', to: '/' }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Quản lý tài khoản người dùng',
  //     to: '#',
  //     childrens: [
  //       {
  //         // group: 'group1',
  //         items: [
  //           { name: 'Tạo tài khoản cán bộ, giáo viên', to: ROUTE_PATH_CREATE_ACCOUNT },
  //           { name: 'Thông tin cá nhân', to: '/' }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Quản trị giao diện',
  //     // to: '/quan-tri/',
  //     childrens: [
  //       {
  //         items: [
  //           { name: 'Chọn giao diện', to: '/' },
  //           { name: 'Cài đặt giao diện', to: '/' }
  //         ]
  //       }
  //     ]
  //   },
  //   { name: 'test', to: '/test' }
  // ]
  'quan-tri-he-thong': [
    {
      name: 'Quản lý kế hoạch',
      to: '#',
      childrens: [
        {
          group: 'Kế hoạch giảng dạy',
          items: [
            { name: 'Lập kế hoạch giảng dạy', to: '/' },
            { name: 'Kế hoạch tổ, bộ môn gửi lên', to: '/' }
          ]
        },
        {
          group: 'Dự giờ',
          items: [
            { name: 'Kế hoạch dự giờ', to: '/' },
            { name: 'Kế hoạch dự giờ của tổ bộ môn', to: '/' }
          ]
        }
      ]
    },
    {
      name: 'Quản lý giáo án, bài giảng, tài liệu',
      to: '#',
      childrens: [
        {
          group: 'Quản lý giáo án',
          items: [
            { name: 'Quản lý giáo án giáo viên', to: ROUTE_PATH_CREATE_ACCOUNT },
            { name: 'Chấm điểm giáo án', to: '/' }
          ]
        },
        {
          group: 'Quản lý bài giảng ',
          items: [
            { name: 'Quản lý chuyên mục', to: ROUTE_PATH_CREATE_ACCOUNT },
            { name: 'Tạo giáo án', to: '/' },
            { name: 'Quản lý bài giảng giáo viên', to: '/' },
            { name: 'Chấm điểm đánh giá', to: '/' }
          ]
        },
        {
          group: 'Quản lý tài liệu',
          items: [
            { name: 'Quản lý chuyên mục', to: ROUTE_PATH_CREATE_ACCOUNT },
            { name: 'Tạo tài liệu, kho học liệu', to: '/' },
            { name: 'Quản lý tài liệu giáo viên', to: '/' }
          ]
        }
      ]
    },
    {
      name: 'Quản lý sáng kiến',
      // to: '/quan-tri/',
      childrens: [
        {
          items: [
            {
              name: 'Quản lý chuyên mục',
              to: '/'
            },
            { name: 'Gửi sáng kiến', to: '/' },
            { name: 'Quản lý sáng kiến của tổ, bộ môn gửi lên', to: '/' },
            { name: 'Gửi sáng kiến lên cấp phòng', to: '/' }
          ]
        }
      ]
    },
    {
      name: 'Quản lý cán bộ, giáo viên',
      to: '#',
      childrens: [
        {
          items: [{ name: 'Thông tin cán bộ, giáo viên', to: ROUTE_DS_CBGV }]
        },
        {
          group: 'Quản lý phòng ban',
          items: [
            { name: 'Thêm phòng ban', to: ROUTE_PATH_CREATE_PHONGBAN },
            { name: 'Thêm cán bộ, giáo viên', to: '/' }
          ]
        },
        {
          group: 'Quản lý tổ, bộ môn',
          items: [
            { name: 'Thêm tổ, bộ môn', to: ROUTE_PATH_CREATE_BOMON },
            { name: 'Thêm cán bộ, giáo viên', to: '/' }
          ]
        },
        {
          group: 'Quản lý giáo viên giỏi',
          items: [
            { name: 'Danh sách giáo viên', to: ROUTE_PATH_DS_GV },
            { name: 'Kế hoạch thi', to: '/' },
            { name: 'Tổ chức thi và đánh giá', to: '/' },
            { name: 'Danh sách thi cấp phòng', to: '/' }
          ]
        }
      ]
    }
  ]
  // ROLE_SUPER_ADMIN: [
  //   {
  //     name: 'Quản lý kế hoạch',
  //     to: '#',
  //     childrens: [
  //       {
  //         group: 'Kế hoạch giảng dạy',
  //         items: [
  //           { name: 'Lập kế hoạch giảng dạy', to: '/' },
  //           { name: 'Kế hoạch tổ, bộ môn gửi lên', to: '/' }
  //         ]
  //       },
  //       {
  //         group: 'Dự giờ',
  //         items: [
  //           { name: 'Kế hoạch dự giờ', to: '/' },
  //           { name: 'Kế hoạch dự giờ của tổ bộ môn', to: '/' }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Quản lý giáo án, bài giảng, tài liệu',
  //     to: '#',
  //     childrens: [
  //       {
  //         // group: 'group1',
  //         items: [
  //           { name: 'Tạo tài khoản cán bộ, giáo viên', to: '/' },
  //           { name: 'Thông tin cá nhân', to: '/' }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Quản lý sáng kiến',
  //     // to: '/quan-tri/',
  //     childrens: [
  //       {
  //         items: [
  //           { name: 'Chọn giao diện', to: '/' },
  //           { name: 'Cài đặt giao diện', to: '/' }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Quản lý cán bộ, giáo viên',
  //     to: '#',
  //     childrens: [
  //       {
  //         items: [{ name: 'Thông tin cán bộ, giáo viên', to: '/' }]
  //       },
  //       {
  //         group: 'Quản lý phòng ban',
  //         items: [
  //           { name: 'Thêm phòng ban', to: '/' },
  //           { name: 'Thêm cán bộ, giáo viên', to: '/' }
  //         ]
  //       },
  //       {
  //         group: 'Quản lý tổ, bộ môn',
  //         items: [
  //           { name: 'Thêm tổ, bộ môn', to: '/' },
  //           { name: 'Thêm cán bộ, giáo viên', to: '/' }
  //         ]
  //       },
  //       {
  //         group: 'Quản lý giáo viên giỏi',
  //         items: [
  //           { name: 'Danh sách giáo viên', to: '/' },
  //           { name: 'Kế hoạch thi', to: '/' },
  //           { name: 'Tổ chức thi và đánh giá', to: '/' },
  //           { name: 'Danh sách thi cấp phòng', to: '/' }
  //         ]
  //       }
  //     ]
  //   }
  // ]
}

export const settings = {
  ROLE_SUPER_ADMIN: [
    {
      name: 'Quản trị hệ thống',
      to: '/quan-tri-he-thong'
    },
    {
      name: 'Đổi mật khẩu',
      to: ROUTE_PATH_CHANGEPASSWORD
    },
    {
      name: 'Đăng xuất',
      to: ROUTE_PATH_LOGIN
    }
  ]
}
