import * as profileTool from './profileTool';

export default function goHomePage(replace) {
  const username = profileTool.getUsername();
  if (!username) {
    replace('/login');
  } else {
    replace('/users');
  }
}
