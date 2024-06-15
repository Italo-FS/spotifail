import { IRegistrationForm, registerUser } from "@/logic/auth";
import Button from "@components/shared/Button";
import { Card } from "@components/shared/Card";
import Input from "@components/shared/Input";
import Typography from "@components/shared/Typography";
import { useDefaultContext } from "@hooks/DefaultContext";
import {
    Checkbox,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export function SimpleRegistrationForm() {
    const { register, handleSubmit, reset } = useForm<IRegistrationForm>();
    const router = useRouter();

    const { showError } = useDefaultContext()

    const onSubmit = async (data: IRegistrationForm) => {

        let errorString = '';
        if (data.email !== data.emailConfirmation) {
            errorString += 'E-mails não conferem. ';
        }

        if (data.password !== data.passwordConfirmation) {
            errorString += 'Senhas não conferem. ';
        }

        if (!data.termAccept) {
            errorString += 'Você não concordou com os termos e condições. ';
        }

        if (errorString.length > 0) {
            showError({
                header: 'Erro',
                body: errorString,
            });
            return;
        }

        registerUser(data)
            .then(response => {
                router.push('/sign_in')
            })
            .catch(error => {
                showError({
                    header: 'Erro',
                    body: error.message,
                });
            });
    };

    return (
        <Card color="white" shadow={true} className="p-4 mx-auto my-2 sm:m-4 w-fit backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 dark:bg-opacity-80 bg-gray-100 dark:bg-zinc-800">
            <Typography variant="h4">Registro</Typography>
            <Typography className="mt-1">Insira seus dados para se registrar.</Typography>
            <form className="mt-1 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2 flex flex-col gap-2">
                    <Input size="lg" label="Nome" register={() => register("name", { required: true })} required />
                    <div>
                        <div className="mt-2"><Input size="lg" label="Email" register={() => register("email")} required /></div>
                        <div className="mt-2"><Input size="lg" label="Confirme o e-mail" register={() => register("emailConfirmation")} required /></div>
                    </div>
                    <div>
                        <div className="mt-2"><Input type="password" size="lg" label="Senha" register={() => register("password")} required /></div>
                        <div className="mt-2"><Input type="password" size="lg" label="Confirme a senha" register={() => register("passwordConfirmation")} required /></div>
                    </div>
                </div>
                <Checkbox
                    label={
                        <Typography className="flex items-center" variant="small">

                            Eu concordo com os
                            <Link
                                href="#"
                                className="font-medium transition-colors text-gray-900 hover:text-black dark:text-gray-300 dark:hover:text-white"
                            >
                                &nbsp;Termos e Condições
                            </Link>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                    crossOrigin={undefined}
                    {...register("termAccept")}
                />
                <Button className="mt-2" fullWidth type="submit">
                    Registrar
                </Button>
                <Typography className="mt-2 text-center">Já tem uma conta?{" "}
                    <Link href="/sign_in" className="font-medium text-gray-900 hover:text-black dark:text-gray-300 dark:hover:text-white">
                        Entrar
                    </Link>
                </Typography>
            </form>
        </Card>
    );
}