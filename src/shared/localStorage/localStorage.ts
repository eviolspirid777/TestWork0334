const setAccessToken = (accessToken: string) =>
  localStorage.setItem('accessToken', accessToken);
const getAccessToken = () => localStorage.getItem('accessToken');

const setRefreshToken = (refreshToken: string) =>
  localStorage.setItem('refreshToken', refreshToken);
const getRefreshToken = () => localStorage.getItem('refreshToken');

export const localStorageService = {
  setAccessToken,
  getAccessToken,
  setRefreshToken,
  getRefreshToken,
};
