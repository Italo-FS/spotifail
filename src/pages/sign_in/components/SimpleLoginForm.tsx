import { ILoginForm, loginUser } from "@/logic/auth";
import Button from "@components/shared/Button";
import { Card } from "@components/shared/Card";
import Input from "@components/shared/Input";
import Typography from "@components/shared/Typography";
import { AuthContext } from "@hooks/AuthContext";
import { useDefaultContext } from "@hooks/DefaultContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";

export function SimpleLoginForm() {
    const { register, handleSubmit, reset } = useForm<ILoginForm>();
    const router = useRouter();

    const { showError } = useDefaultContext()

    const { setIsAuthenticated } = useContext(AuthContext);

    const onSubmit = async (data: ILoginForm) => {
        await loginUser(data).then(response => {
            setIsAuthenticated(true);
            router.push('/');
        }).catch(error => {
            showError({
                header: 'Usuário não encontrado',
                body: error.message,
            });
        });
    };

    return (
        <Card color="white" shadow={true} className="p-4 mx-auto my-2 sm:m-4 w-fit backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 dark:bg-opacity-80 bg-gray-100 dark:bg-zinc-800">
            <Typography variant="h4">Login</Typography>
            <Typography className="mt-1">Olá novamente!</Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg lg:w-96" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Email" register={() => register("email")} />
                    <Input type="password" size="lg" label="Senha" register={() => register("password")} />
                </div>
                <Button className="mt-6" type="submit" fullWidth>
                    Entrar
                </Button>
                <Typography className="mt-4 text-center">Ainda não possui uma conta?{" "}
                    <Link href="/sign_up" className="font-medium text-gray-900 hover:text-black dark:text-gray-300 dark:hover:text-white">
                        Registrar
                    </Link>
                </Typography>
                <div className="mt-4 text-center">
                    <Link href="#" className="font-normal text-gray-900 hover:text-black dark:text-gray-300 dark:hover:text-white">
                        Esqueci a senha
                    </Link>
                </div>
            </form>
        </Card>
    );
}  