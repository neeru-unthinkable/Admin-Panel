const BASE_URL = process.env.REACT_APP_BASE_URL;
const MICRO_SERVICES_URL = process.env.REACT_APP_MICRO_SERVICES_URL;

const API_URLS = {
  signIn: "signIn",
  getPermissions: "getPermissions",
  refreshToken: "refreshToken",
};

export default API_URLS;
export { BASE_URL, MICRO_SERVICES_URL };
