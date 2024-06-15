import { IUpdateForm, updateUser } from "@/logic/auth";
import Button from "@components/shared/Button";
import { Card } from "@components/shared/Card";
import Input from "@components/shared/Input";
import Typography from "@components/shared/Typography";
import { useAuthContext } from "@hooks/AuthContext";
import { useDefaultContext } from "@hooks/DefaultContext";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function ProfileForm() {
    const { userData } = useAuthContext();
    const { register, handleSubmit } = useForm<IUpdateForm>();
    const router = useRouter();

    const { showError } = useDefaultContext()


    const onSubmit = async (data: IUpdateForm) => {

        let errorString = '';

        if (data.password !== data.passwordConfirmation) {
            errorString += 'Senhas não conferem. ';
        }

        if (errorString.length > 0) {
            showError({
                header: 'Erro',
                body: errorString,
            });
            return;
        }

        updateUser(data).then(response => showError({
            header: 'Sucesso!',
            body: 'Dados atualizados com sucesso.',
        })).catch(error => showError({
            header: 'Erro ao atualizar',
            body: error.message,
        }));
    };

    return (
        <Card color="white" shadow={true} className="p-4 mx-auto my-2 sm:m-4 w-fit backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 dark:bg-opacity-80 bg-gray-100 dark:bg-zinc-800">
            <Typography variant="h4">Dados Pessoais</Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-72 flex-col gap-6 mt-4">
                    <Input
                        type="text"
                        label={`Nome`}
                        className="!border-t-transparent"
                        placeholder={userData.name}
                        variant="static"
                        register={() => register("name", { required: false })}
                    />
                    <Input
                        type="email"
                        label='Email'
                        placeholder={userData.email}
                        variant="static"
                        register={() => register("email", { required: false })}
                    />
                    <Input
                        type="password"
                        label='Senha'
                        variant="static"
                        register={() => register("password", { required: false })}
                    />
                    <Input
                        type="password"
                        label='Confirmação de Senha'
                        variant="static"
                        register={() => register("passwordConfirmation", { required: false })}
                    />
                </div>
                <Button type="submit" className='mt-4'>Salvar</Button>
            </form>
        </Card>
    );
}  