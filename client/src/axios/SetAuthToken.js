import AxiosInstance from '../AxiosInstance'

export const setAuthToken = (token) => {
    if (token) {
        AxiosInstance.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${token}`;
    } else {
        delete AxiosInstance.defaults.headers.common["Authorization"];
    }
};