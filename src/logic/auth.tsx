import { axiosGet, axiosPatch, axiosPost } from "./bridge";

export interface ILoginForm {
    email: string;
    password: string;
}

export interface IRegistrationForm {
    name: string;
    email: string;
    emailConfirmation: string;
    password: string;
    passwordConfirmation: string;
    termAccept: boolean;
}

export interface IUpdateForm {
    id: string;
    name?: string;
    email?: string;
    password?: string;
    passwordConfirmation?: string;
}

export async function getUser() {
    try {
        const token = localStorage.getItem('token');
        if (token) {
            const response = axiosGet({
                route: `/auth/me`,
            });
            return response;

            // const response = await axios.post(`http://localhost:5000/auth/me`, null, {
            //     headers: { Authorization: `Bearer ${token}` }
            // });
            // return response.data;
        } else {
            return null; //Token not found
        }
    } catch (error) {
        // console.error('Error retrieving user data:', error);
        throw error;
    }
};

export async function loginUser(data: ILoginForm) {
    try {
        const response = await axiosPost({
            route: `/auth/login`,
            data: {
                email: data.email,
                password: data.password
            },
        });
        localStorage.setItem('token', String(response.accessToken));
        return response;
    } catch (error) {
        throw error;
    }
}

export async function registerUser(data: IRegistrationForm) {
    if (data.email !== data.emailConfirmation) {
        alert('e-mails não conferem.');
        return
    }

    if (data.password !== data.passwordConfirmation) {
        alert('senhas não conferem.');
        return;
    }

    if (!data.termAccept) {
        alert('Você não concordou com os termos e condições.');
        return;
    }

    try {
        return axiosPost({
            route: `/auth/register`,
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
            }
        });
        // const response = await axios.post(`${backend}/auth/register`, {
        //     name: data.name,
        //     email: data.email,
        //     password: data.password
        // });
        // return response.data;
    } catch (error) {
        if (error.response) {
            // O servidor respondeu com um status fora do intervalo 2xx
            const errorMessage = error.response.data.message.join('\n');
            throw new Error(`Erro ao criar novo usuário: ${errorMessage}`);
        } else if (error.request) {
            // A solicitação foi feita, mas não recebeu resposta
            throw new Error('A solicitação foi feita, mas não recebeu resposta', error.request);
        } else {
            // Ocorreu um erro ao configurar a solicitação
            throw new Error('Erro ao configurar a solicitação', error.message);
        }
        throw new Error('Erro ao criar novo usuário:', error);
    }
};

export async function updateUser(data: IUpdateForm) {
    try {
        const requestData: any = {}; // Inicializa um objeto vazio
        if (data.email) {
            requestData.email = data.email;
        }
        if (data.name) {
            requestData.name = data.name;
        }
        if (data.password) {
            requestData.password = data.password;
        }

        const response = await axiosPatch({
            route: `/auth`,
            data: requestData,
        });

        if (response) {
            localStorage.setItem('token', String(response.accessToken));
        }
        return response;
    } catch (error) {
        throw error
    }
}