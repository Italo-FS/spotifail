import axios from "axios";
const backend = 'http://localhost:5000';

// axios.interceptors

interface IGetProps {
    route: string;
}

interface IPostProps {
    route: string;
    data?: {};
}

function getHeader() {
    const token = localStorage.getItem('token');
    const header = (token) ? {
        headers: { Authorization: `Bearer ${token}` }
    } : {};
    return header;
}

export async function axiosGet({ route }: IGetProps) {
    const response = await axios.get(`${backend}${route}`, getHeader()).then(response => {
        return response.data;
    }).catch(error => {
        throw new Error(error.response?.data?.message || 'Erro na requisição');
    });
    return response;
}

export async function axiosPost({ route, data }: IPostProps) {
    const response = await axios.post(`${backend}${route}`, data, getHeader()).then(response => {
        return response.data;
    }).catch(error => {
        throw new Error(error.response?.data?.message || 'Erro na requisição');
    });
    return response;
}

export async function axiosPatch({ route, data }: IPostProps) {
    const response = await axios.patch(`${backend}${route}`, data, getHeader()).then(response => {
        return response.data;
    }).catch(error => {
        throw new Error(error.response?.data?.message || 'Erro na requisição');
    });
    return response;
}

export async function axiosDelete({ route }: IGetProps) {
    const response = await axios.delete(`${backend}${route}`, getHeader()).then(response => {
        return response.data;
    }).catch(error => {
        throw new Error(error.response?.data?.message || 'Erro na requisição');
    });
    return response;
}