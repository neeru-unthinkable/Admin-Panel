import axios from "axios";

const server = axios.create({
    mode: 'cors',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
});

const multipartServer = axios.create({
    mode: 'cors',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
    }
});

server.interceptors.response.use(
    (response) => response.data,
    (e) => {
        throw e;
    },
)

export { server, multipartServer };

