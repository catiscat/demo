export default function goHomePage(replace) {
  const profile = sessionStorage.getItem('profile');
  if (!profile) {
    replace('/login');
  } else {
    replace('/users');
  }
}