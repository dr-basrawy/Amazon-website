import axiosInstance from "../axiosConfig/instance";

export const login = (data) => {
    return axiosInstance.post("/user/login", data);
};
export const logout = () => {
    return axiosInstance.get("/user/logout");
};
export const refresh = () => {
    return axiosInstance.get("/user/refresh");
};

export const register = (data) => {
    return axiosInstance.post("/user/signup", data);
};

export const updateUser = (userid , data) => {
    return axiosInstance.patch(`/user/${userid}`, data);
};
