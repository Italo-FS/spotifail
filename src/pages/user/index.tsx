import axios from "axios";

export default function User() {
    const teste = async () => {
        try {
            const response = await axios.post('http://localhost:5000/auth/me', {});
            return response;
        } catch (error) {
            console.error('Usuário não encontrado: ', error);
            alert('Usuário não encontrado');
        }
    };

    return (
        <>
            Teste
        </>
    );
}