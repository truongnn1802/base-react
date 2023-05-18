import { ROUTE_PATH_LOGIN, ROUTE_PATH_CHANGEPASSWORD,ROUTE_PATH_REGISTER } from 'src/routes/constant'

export const MENU_NAV = [
  { name: 'Phân quyền chức năng', to: '/' },
  {
    name: 'Quản lý tài khoản người dùng',
    to: '#',
    childrens: [
      {
        // group: 'group1',
        items: [{ name: 'Tạo tài khoản cán bộ, giáo viên', to: ROUTE_PATH_REGISTER }]
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
  'quan-tri-he-thong': [
    { name: 'Phân quyền chức năng', to: '/' },
    {
      name: 'Quản lý tài khoản người dùng',
      to: '#',
      childrens: [
        {
          // group: 'group1',
          items: [
            { name: 'Tạo tài khoản cán bộ, giáo viên', to: ROUTE_PATH_REGISTER },
            { name: 'Thông tin cá nhân', to: '/' }
          ]
        }
      ]
    },
    {
      name: 'Quản trị giao diện',
      // to: '/quan-tri/',
      childrens: [
        {
          items: [
            { name: 'Chọn giao diện', to: '/' },
            { name: 'Cài đặt giao diện', to: '/' }
          ]
        }
      ]
    },
    { name: 'test', to: '/test' }
  ],
  ROLE_SUPER_ADMIN: [
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
          // group: 'group1',
          items: [
            { name: 'Tạo tài khoản cán bộ, giáo viên', to: '/' },
            { name: 'Thông tin cá nhân', to: '/' }
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
            { name: 'Chọn giao diện', to: '/' },
            { name: 'Cài đặt giao diện', to: '/' }
          ]
        }
      ]
    },
    {
      name: 'Quản lý cán bộ, giáo viên',
      to: '#',
      childrens: [
        {
          items: [{ name: 'Thông tin cán bộ, giáo viên', to: '/' }]
        },
        {
          group: 'Quản lý phòng ban',
          items: [
            { name: 'Thêm phòng ban', to: '/' },
            { name: 'Thêm cán bộ, giáo viên', to: '/' }
          ]
        },
        {
          group: 'Quản lý tổ, bộ môn',
          items: [
            { name: 'Thêm tổ, bộ môn', to: '/' },
            { name: 'Thêm cán bộ, giáo viên', to: '/' }
          ]
        },
        {
          group: 'Quản lý giáo viên giỏi',
          items: [
            { name: 'Danh sách giáo viên', to: '/' },
            { name: 'Kế hoạch thi', to: '/' },
            { name: 'Tổ chức thi và đánh giá', to: '/' },
            { name: 'Danh sách thi cấp phòng', to: '/' },
          ]
        }
      ]
    }
  ]
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
