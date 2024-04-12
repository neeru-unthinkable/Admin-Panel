import { multipartServer, server } from "./server";

const post = ({
    url,
    multipart,
    headers,
    data,
    timeout,
    formData,
    token, 
    params
}) => {
    const configOptions = {
        url,
        data,
        headers,
        method: 'post',
        timeout: timeout || 5 * 60 * 1000,
        params
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

const get = ({
    url, 
    headers, 
    timeout, 
    token
}) => {
    const configOptions = {
        url, 
        headers, 
        method: "get", 
        timeout: timeout || 5 * 60 * 1000,
    };
    if(token){
        configOptions.headers = {
            ...configOptions.headers,
            Authorization:`Bearer ${token}`,
        };
    }
    return server(configOptions);

}
export { post , get };