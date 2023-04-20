export const MENU_NAV = [
  { name: 'Trang Chủ', to: '/' },
  {
    name: 'item1',
    to: '#',
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
  {
    name: 'item2',
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
  }
]
