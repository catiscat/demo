export function getUsername() {
  const profile = JSON.parse(decodeURIComponent(sessionStorage.getItem('profile')));
  const username = profile && profile.user && profile.user.username;
  return username;
}
