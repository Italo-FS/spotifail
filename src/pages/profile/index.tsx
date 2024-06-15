import { useAuthContext } from '@hooks/AuthContext';
import { useEffect } from 'react';
import { useRouter } from "next/router";
import { ProfileForm } from './components/ProfileForm';
import Image from "next/image";
import { getUser } from '@/logic/auth';

export default function EditUser() {
    const { isAuthenticated } = useAuthContext();
    const router = useRouter();

    // Redirecionar o usuário se não estiver logado
    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/sign_in');
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <>
            <h1>Editar Usuário</h1>
            <Image src="/images/backgrounds/sign_up.jpg" alt="background" fill={true} />
            <ProfileForm />
        </>
    );
}
