import axios from "axios";
import { BASE_URL, MICRO_SERVICES_URL } from "./urls";
import { toBool } from "../helpers/utils";

const server = axios.create({
  mode: "cors",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const multipartServer = axios.create({
  mode: "cors",
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});

server.interceptors.request.use((request) => {
  if (toBool(process.env.REACT_APP_WITH_MICRO_SERVICES)) {
    request.url = BASE_URL + MICRO_SERVICES_URL + request.url;
  } else { request.url = BASE_URL + request.url }
  return request;
});

server.interceptors.response.use(
  (response) => response.data,
  (e) => {
    throw e;
  }
);

export { server, multipartServer };
