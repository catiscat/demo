
const initialState = {
  menuItems: [
    {
      localeKey: 'User',
      icon: 'users',
      children: [
        {
          localeKey: 'Users',
          link: '/users'
        }
      ]
    }
  ]
};

export default function settings(state = initialState) {
  return state;
}

