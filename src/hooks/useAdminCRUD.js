// import axios from "axios";
import useAdminContext from "./useAdminContext";
import { useCallback, useState } from "react";
import { post } from "../api";
import { getItemFromLocalStorage } from "../helpers/localStoragehelper";
import { AUTH_CONFIG } from "../constants";

const useAdminCRUD = ({
    url,
    method,
    multipart,
    timeout
}) => {
    const getToken = () => JSON.parse(getItemFromLocalStorage(AUTH_CONFIG.AUTH_SESSION_INFO))?.token; 
    const { loading, setLoading } = useAdminContext();
    // const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const clearResponse = useCallback(() => {
        setResponse(null);
    }, [setResponse]);

    const op = {};

    op.create = useCallback(
        async ({ data, headers, formData, token }) => {
            setLoading(true);
            const res = await post({
                url,
                multipart,
                timeout,
                token: token || getToken(),
                data,
                headers,
                formData,
            }).catch((e) => {
                console.log("Error ---> ", e)
                setResponse(e?.response?.data);
            });
            setLoading(false);
            if(res) setResponse(res);
        }, [multipart, timeout, url]
    );

    return [op[method], response, loading, clearResponse];
};

export default useAdminCRUD;
