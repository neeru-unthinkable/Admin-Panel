import { multipartServer, server } from "./server";

const post = ({
    url,
    multipart,
    headers,
    data,
    timeout,
    formData,
    token, 
}) => {
    const configOptions = {
        url,
        data,
        headers,
        method: 'post',
        timeout: timeout || 5 * 60 * 1000,
    };
    if (token) {
        configOptions.headers = {
            ...configOptions.headers,
            Authorization: `Bearer ${token}`,
        };
    }
    if (multipart) {
        configOptions.data = formData;
        return multipartServer(configOptions);
    }
    return server(configOptions);
}

export { post };